import type { Metadata } from "next/types";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Tax Insights | Insight Safari",
};

export default function TaxInsights() {
  const questions: string[] = [
    "Will I owe taxes when my RSUs vest?",
    "What are my tax obligations when I transfer or gift shares?",
  ];
  const explained: string[] = [
    "Employees can access practical education on capital gains, withholding, and tax timing.",
  ];

  return (
    <Container
      questions={questions}
      explained={explained}
      explainedTitle={"ESSENTIAL TAX KNOWLEDGE."}
    />
  );
}
