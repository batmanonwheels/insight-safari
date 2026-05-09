import type { Metadata } from "next/types";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Communications | Insight Safari",
};

export default function Communications() {
  const questions: string[] = [
    "Where do I find my tax documents?",
    "When can I exercise my options?",
    "How many shares are vesting in my next vest?",
    "What are the options for my proceeds?",
  ];
  const explained: string[] = [
    "Answer employee questions by offering timely communications at grant, vest and other key plan moments, plus practical steps.",
  ];

  return (
    <Container
      questions={questions}
      explained={explained}
      explainedTitle={
        "OUTREACH DURING KEY MOMENTS OR FEATURING TARGETED FINANCIAL STRATEGIES."
      }
    />
  );
}
