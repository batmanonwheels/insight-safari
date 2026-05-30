"use client";

import Link from "next/link";
import { handleFullscreen } from "./fullscreen";

export const Nav = () => {
  return (
    <nav className="flex flex-wrap justify-center text-3xl gap-10 *:px-15 *:py-10 *:bg-[#0C7158] *:border-10 *:rounded-2xl">
      <Link href="/equity-education" replace>
        EQUITY EDUCATION
      </Link>
      <Link href="/communications" replace>
        COMMUNICATIONS
      </Link>
      <Link href="/financial-wellness" replace>
        FINANCIAL WELLNESS
      </Link>
      <Link href="/platform-support" replace>
        PLATFORM SUPPORT
      </Link>
      <Link href="/tax-insights" replace>
        TAX INSIGHTS
      </Link>
    </nav>
  );
};

//  onClick={() => handleFullscreen()}
