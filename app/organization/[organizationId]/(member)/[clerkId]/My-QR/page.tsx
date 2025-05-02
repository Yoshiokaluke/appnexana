'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useUser } from '@clerk/nextjs';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { QRCodeSVG } from 'qrcode.react';
import { toast } from "sonner";
import { Download } from 'lucide-react';

type QRData = {
  id: string;
  userId: string;
  organizationId: string;
  qrCode: string;
  createdAt: string;
};

export default function MyQRPage() {
  const params = useParams();
  const { user } = useUser();
  const [qrData, setQRData] = useState<QRData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchQRData();
  }, [params.organizationId, params.clerkId]);

  const fetchQRData = async () => {
    try {
      const response = await fetch(`/api/organization/${params.organizationId}/members/${params.clerkId}/qr`);
      if (!response.ok) {
        throw new Error('QRコードの取得に失敗しました');
      }
      const data = await response.json();
      setQRData(data);
    } catch (error) {
      console.error('Error:', error);
      toast.error('QRコードの取得に失敗しました');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = () => {
    const canvas = document.querySelector('canvas');
    if (!canvas) return;

    const link = document.createElement('a');
    link.download = `qr-code-${user?.firstName}-${user?.lastName}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  if (isLoading) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6">マイQRコード</h2>

      <Card className="p-6 bg-white">
        <div className="text-center space-y-6">
          <div className="flex flex-col items-center space-y-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              {qrData && (
                <QRCodeSVG
                  value={qrData.qrCode}
                  size={200}
                  level="H"
                  includeMargin
                />
              )}
            </div>
            <Button
              onClick={handleDownload}
              className="flex items-center space-x-2"
            >
              <Download className="w-4 h-4" />
              <span>QRコードをダウンロード</span>
            </Button>
          </div>

          <div className="text-sm text-gray-600">
            <p>このQRコードは、あなた専用のものです。</p>
            <p>組織内での本人確認に使用されます。</p>
          </div>
        </div>
      </Card>
    </div>
  );
} 