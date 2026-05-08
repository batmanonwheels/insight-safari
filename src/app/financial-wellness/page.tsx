import type { Metadata } from "next/types";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Financial Wellness | Insight Safari",
};

export default function FinancialWellness() {
  const questions: string[] = [""];
  const explained: string[] = [""];
  const legal: string[] = [""];

  return (
    <Container questions={questions} explained={explained} legal={legal} />
  );
}
