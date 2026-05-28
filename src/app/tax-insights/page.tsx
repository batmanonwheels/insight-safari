import type { Metadata } from "next/types";
import { PhotoContainer } from "@/components/photo-container";

export const metadata: Metadata = {
  title: "Tax Insights | Insight Safari",
};

export default function TaxInsights() {
  const photos: string[] = [
    "/flows/tax-insights/tax-insights-1.webp",
    "/flows/tax-insights/tax-insights-2.webp",
    "/flows/tax-insights/tax-insights-3.webp",
  ];

  return <PhotoContainer photos={photos} />;
}
