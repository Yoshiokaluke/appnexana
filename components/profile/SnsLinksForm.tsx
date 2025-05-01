"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const SNS_PATTERNS = {
  facebook: /^https:\/\/(www\.)?facebook\.com\/[a-zA-Z0-9.]+$/,
  linkedin: /^https:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9-]+$/,
  instagram: /^https:\/\/(www\.)?instagram\.com\/[a-zA-Z0-9._]+$/,
};

interface SnsLinksFormProps {
  snsLinks: {
    facebook: string;
    linkedin: string;
    instagram: string;
  };
  setSnsLinks: (links: {
    facebook: string;
    linkedin: string;
    instagram: string;
  }) => void;
}

export function SnsLinksForm({ snsLinks, setSnsLinks }: SnsLinksFormProps) {
  const handleSnsLinkChange = (
    platform: keyof typeof snsLinks,
    value: string
  ) => {
    if (value && !SNS_PATTERNS[platform].test(value)) {
      toast.error("正しいURLを入力してください");
      return;
    }

    setSnsLinks({
      ...snsLinks,
      [platform]: value,
    });
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">SNSリンク</h3>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="facebook">Facebook</Label>
          <Input
            id="facebook"
            placeholder="https://www.facebook.com/username"
            value={snsLinks.facebook}
            onChange={(e) => handleSnsLinkChange("facebook", e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="linkedin">LinkedIn</Label>
          <Input
            id="linkedin"
            placeholder="https://www.linkedin.com/in/username"
            value={snsLinks.linkedin}
            onChange={(e) => handleSnsLinkChange("linkedin", e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="instagram">Instagram</Label>
          <Input
            id="instagram"
            placeholder="https://www.instagram.com/username"
            value={snsLinks.instagram}
            onChange={(e) => handleSnsLinkChange("instagram", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
} 