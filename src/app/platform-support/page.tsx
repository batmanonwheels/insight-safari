import type { Metadata } from "next/types";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Platform Support | Insight Safari",
};

export default function PlatformSupport() {
  const questions: string[] = [
    "How do I log in?",
    "Can I see all my accounts in one place?",
  ];
  const explained: string[] = [
    "How-to guides, videos, navigation support, live webinars, and even company-specific sessions make managing accounts simple.",
  ];

  return (
    <Container
      questions={questions}
      explained={explained}
      explainedTitle={"KNOW THE TOOLS. USE THEM WELL."}
    />
  );
}
