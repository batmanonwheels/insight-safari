import type { Metadata } from "next/types";
import { PhotoContainer } from "@/components/photo-container";

export const metadata: Metadata = {
  title: "Platform Support | Insight Safari",
};

export default function PlatformSupport() {
  const photos: string[] = [
    "/flows/platform-support/platform-support-1.webp",
    "/flows/platform-support/platform-support-2.webp",
    "/flows/platform-support/platform-support-3.webp",
  ];

  return <PhotoContainer photos={photos} />;
}
