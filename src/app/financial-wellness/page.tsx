import type { Metadata } from "next/types";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Financial Wellness | Insight Safari",
};

export default function FinancialWellness() {
  const questions: string[] = [
    "How do I catch up on retirement savings?",
    "Can I get advice specific to my financial situation?",
    "How do I save for multiple life goals simultaneously?",
  ];
  const explained: string[] = [
    "Content covering budgeting, retirement, debt, home purchases, college savings, life events and more.",
  ];

  return (
    <Container
      questions={questions}
      explained={explained}
      explainedTitle={
        "OFFER SOLUTIONS TO HELP EMPLOYEES BUILD A PATH TO FINANCTIAL CONFIDENCE."
      }
    />
  );
}
