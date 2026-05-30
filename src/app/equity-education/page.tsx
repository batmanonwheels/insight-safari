import type { Metadata } from "next/types";

import { PhotoContainer } from "@/components/photo-container";

export const metadata: Metadata = {
  title: "Equity Education | Insight Safari",
};

export default function EquityEducation() {
  const photos: string[] = [
    "/flows/equity-education/equity-education-1.webp",
    "/flows/equity-education/equity-education-2.webp",
    "/flows/equity-education/equity-education-3.webp",
  ];

  return <PhotoContainer photos={photos} />;
}
