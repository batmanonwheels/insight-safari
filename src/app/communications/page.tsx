import type { Metadata } from "next/types";
import { PhotoContainer } from "@/components/photo-container";

export const metadata: Metadata = {
  title: "Communications | Insight Safari",
};

export default function Communications() {
  const photos: string[] = [
    "/flows/communications/communications-1.webp",
    "/flows/communications/communications-2.webp",
    "/flows/communications/communications-3.webp",
    "/flows/communications/communications-4.webp",
    "/flows/communications/communications-5.webp",
  ];

  return <PhotoContainer photos={photos} />;
}
