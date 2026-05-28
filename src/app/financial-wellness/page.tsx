import type { Metadata } from "next/types";
import { Container } from "@/components/container";
import { PhotoContainer } from "@/components/photo-container";

export const metadata: Metadata = {
  title: "Financial Wellness | Insight Safari",
};

export default function FinancialWellness() {
  const photos: string[] = [
    "/flows/finacial-wellness/finacial-wellness-1.webp",
    "/flows/finacial-wellness/finacial-wellness-2.webp",
    "/flows/finacial-wellness/finacial-wellness-3.webp",
    "/flows/finacial-wellness/finacial-wellness-4.webp",
  ];

  return <PhotoContainer photos={photos} />;
}
