"use client";

import { useCallback, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import Image from "next/image";
import { Loader2, Upload, X } from "lucide-react";

interface ProfileImageUploadProps {
  profileImage: string | null;
  setProfileImage: (url: string | null) => void;
}

export function ProfileImageUpload({
  profileImage,
  setProfileImage,
}: ProfileImageUploadProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [preview, setPreview] = useState<string | null>(profileImage);

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];

      if (!file) return;

      // ファイルサイズチェック (5MB)
      if (file.size > 5 * 1024 * 1024) {
        toast.error("ファイルサイズは5MB以下にしてください");
        return;
      }

      // ファイルタイプチェック
      if (!file.type.match(/^image\/(jpeg|png|webp)$/)) {
        toast.error("JPG、PNG、WebP形式の画像のみアップロード可能です");
        return;
      }

      try {
        setIsUploading(true);

        // プレビューの作成
        const previewUrl = URL.createObjectURL(file);
        setPreview(previewUrl);

        // S3へのアップロード用の署名付きURLを取得
        const response = await fetch("/api/upload", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fileName: file.name,
            fileType: file.type,
          }),
        });

        if (!response.ok) {
          throw new Error("アップロードURLの取得に失敗しました");
        }

        const { signedUrl, fileKey } = await response.json();

        // S3へアップロード
        const uploadResponse = await fetch(signedUrl, {
          method: "PUT",
          body: file,
          headers: {
            "Content-Type": file.type,
          },
        });

        if (!uploadResponse.ok) {
          throw new Error("画像のアップロードに失敗しました");
        }

        // 画像URLの生成
        const imageUrl = `https://${process.env.NEXT_PUBLIC_AWS_S3_BUCKET}.s3.${process.env.NEXT_PUBLIC_AWS_REGION}.amazonaws.com/${fileKey}`;
        setProfileImage(imageUrl);
        toast.success("画像をアップロードしました");
      } catch (error) {
        console.error(error);
        toast.error("画像のアップロードに失敗しました");
        setPreview(profileImage);
        if (preview) {
          URL.revokeObjectURL(preview);
        }
      } finally {
        setIsUploading(false);
      }
    },
    [profileImage, setProfileImage, preview]
  );

  // コンポーネントのアンマウント時にプレビューURLを解放
  useEffect(() => {
    return () => {
      if (preview && preview !== profileImage) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview, profileImage]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [],
      "image/png": [],
      "image/webp": [],
    },
    maxFiles: 1,
  });

  const removeImage = () => {
    if (preview && preview !== profileImage) {
      URL.revokeObjectURL(preview);
    }
    setProfileImage(null);
    setPreview(null);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className={`relative w-32 h-32 rounded-full overflow-hidden border-2 border-dashed transition-colors duration-200 flex items-center justify-center bg-gray-50 ${
          isDragActive ? "border-primary border-solid bg-primary/5" : "border-gray-300"
        }`}
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        {isUploading ? (
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-white" />
          </div>
        ) : preview ? (
          <>
            <Image
              src={preview}
              alt="Profile"
              fill
              className="object-cover"
              sizes="128px"
            />
            <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-200 flex items-center justify-center opacity-0 hover:opacity-100">
              <Upload className="h-8 w-8 text-white" />
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center p-4 text-center">
            <Upload className="h-8 w-8 text-gray-400 mb-2" />
            <p className="text-sm text-gray-500">
              {isDragActive
                ? "ドロップしてアップロード"
                : "クリックまたはドラッグ＆ドロップ"}
            </p>
          </div>
        )}
      </div>

      {preview && !isUploading && (
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="gap-2"
          onClick={removeImage}
        >
          <X className="h-4 w-4" />
          削除
        </Button>
      )}
    </div>
  );
} 