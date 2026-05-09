import type { Metadata } from "next/types";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Equity Education | Insight Safari",
};

export default function EquityEducation() {
  const questions: string[] = [
    "How do my stock options work?",
    "Can I fund college with equity?",
  ];
  const explained: string[] = [
    "We have a rich library of guides, videos, glossaries, and webinars that help employees understand stock options, RSUs, ESPPs, and more.",
  ];

  return (
    <Container
      questions={questions}
      explained={explained}
      explainedTitle={"EQUITY, EXPLAINED."}
    />
  );
}
