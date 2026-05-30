import type { Metadata } from "next/types";
import { PhotoContainer } from "@/components/photo-container";

export const metadata: Metadata = {
  title: "Financial Wellness | Insight Safari",
};

export default function FinancialWellness() {
  const photos: string[] = [
    "/flows/financial-wellness/financial-wellness-1.webp",
    "/flows/financial-wellness/financial-wellness-2.webp",
    "/flows/financial-wellness/financial-wellness-3.webp",
    "/flows/financial-wellness/financial-wellness-4.webp",
  ];

  return <PhotoContainer photos={photos} />;
}
