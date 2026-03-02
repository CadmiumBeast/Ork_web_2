"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
  const [isOnLightSection, setIsOnLightSection] = useState(false);

  useEffect(() => {
    const updateHeaderState = () => {
      const intelligenceSection = document.getElementById("intelligence-section");

      if (!intelligenceSection) {
        setIsOnLightSection(false);
        return;
      }

      const sectionTop = intelligenceSection.getBoundingClientRect().top;
      setIsOnLightSection(sectionTop <= 92);
    };

    updateHeaderState();
    window.addEventListener("scroll", updateHeaderState, { passive: true });
    window.addEventListener("resize", updateHeaderState);

    return () => {
      window.removeEventListener("scroll", updateHeaderState);
      window.removeEventListener("resize", updateHeaderState);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        isOnLightSection
          ? "border-zinc-200/80 bg-white/95"
          : "border-transparent bg-[#FFEDEB]/95"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-5 md:flex-row md:items-center md:justify-between md:px-10 md:py-6">
        <div className="flex items-center">
          <Image
            src="/images/Orkestrate_Orange_Gradient.png"
            alt="Orkestrate logo"
            width={180}
            height={48}
            priority
          />
        </div>

        <nav className="flex items-center gap-6 text-sm font-normal text-[#4B5563] md:gap-8">
          <a
            href="#"
            className="rounded-md px-2 py-1 transition-colors hover:bg-[#FAB6AA] hover:text-[#E0422D]"
          >
            Home
          </a>
          <a
            href="#"
            className="rounded-md px-2 py-1 transition-colors hover:bg-[#FAB6AA] hover:text-[#E0422D]"
          >
            About Us
          </a>
          <a
            href="#"
            className="rounded-md px-2 py-1 transition-colors hover:bg-[#FAB6AA] hover:text-[#E0422D]"
          >
            Contact Us
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="rounded-[11px] border border-[#131313]/40 bg-white p-3 text-sm font-medium text-[#4B5563] transition-colors hover:border-[#131313]/70 hover:bg-white"
          >
            Login
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-[11px] bg-[#E0422D] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#EB5825]"
          >
            <span>Book A Demo</span>
            <span aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 0 1 .75-.75h10.69L11.22 6.03a.75.75 0 1 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H3.75A.75.75 0 0 1 3 10Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}