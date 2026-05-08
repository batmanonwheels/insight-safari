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
  const legal: string[] = [
    "*Personalized advice may require the opening of a Morgan Stanley Smith Barney LLC account with a Financial Advisor and may require minimum asset levels. Other eligibility requirements, fees and costs may apply and certain products and services are not available to or appropriate for all clients or all types of Morgan Stanley accounts. Certain listed benefits of working with a Morgan Stanley Financial Advisor such as tax management services are available through the Morgan Stanley investment advisory platform. More information about understanding the differences between Morgan Stanley brokerage and advisory relationships can be found in the Understanding Your Brokerage and Investment Advisory Relationships brochure available at https://www.morganstanley.com/wealth-relationshipwithms/pdfs/understandingyourrelationship.pdf",
    "NOT ALL PRODUCTS AND SERVICES ARE AVAILABLE IN ALL JURISDICTIONS OR COUNTRIES.",
    "Morgan Stanley Smith Barney LLC (“Morgan Stanley”) and its Financial Advisors and Private Wealth Advisors do not provide any tax/legal advice. Consult your own tax/legal advisor before making any tax or legal-related investment decisions.",
    "When Morgan Stanley Smith Barney LLC, its affiliates and Morgan Stanley Financial Advisors and Private Wealth Advisors (collectively, “Morgan Stanley”) provide “investment advice” regarding a retirement or welfare benefit plan account, an individual retirement account or a Coverdell education savings account (“Retirement Account”), Morgan Stanley is a “fiduciary” as those terms are defined under the Employee Retirement Income Security Act of 1974, as amended (“ERISA”), and/or the Internal Revenue Code of 1986 (the “Code”), as applicable. When Morgan Stanley provides investment education, takes orders on an unsolicited basis or otherwise does not provide “investment advice”, Morgan Stanley will not be considered a “fiduciary” under ERISA and/or the Code. For more information regarding Morgan Stanley’s role with respect to a Retirement Account, please visit www.morganstanley.com/disclosures/dol. Tax laws are complex and subject to change. Morgan Stanley does not provide tax or legal advice. Individuals are encouraged to consult their tax and legal advisors (a) before establishing a Retirement Account, and (b) regarding any potential tax, ERISA and related consequences of any investments or other transactions made with respect to a Retirement Account.",
    "Investments are subject to market risk and may fluctuate in value. Before investing, investors should consider whether tax or other benefits are only available for investments in the investor's home-state 529 college savings plan.",
    "Morgan Stanley at Work services and stock plan accounts are provided by wholly owned subsidiaries of Morgan Stanley",
    "©2026 Morgan Stanley. All rights reserved.CRC 5375250 (04/2026)",
  ];

  return (
    <Container questions={questions} explained={explained} legal={legal} />
  );
}
