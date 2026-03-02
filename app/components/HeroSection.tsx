export default function HeroSection() {
  return (
    <section className="pt-14 md:pt-20">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-zinc-300/70 bg-white/45 px-4 py-2 text-xs text-[#4B5563] backdrop-blur-sm">
          <span className="rounded-full bg-red-500 px-2 py-0.5 text-xs font-semibold text-white">
            New
          </span>
          <span>Orkestrate Intelligence is live</span>
          <span aria-hidden="true">→</span>
        </div>

        <p className="mb-3 text-xl font-semibold tracking-wide text-[#4B5563] md:text-2xl">
          Marketing that scales revenue, not headcount
        </p>

        <h1 className="mb-4 whitespace-nowrap text-4xl font-black leading-tight tracking-tight text-[#4B5563] md:text-6xl">
          The AI Marketing Platform
        </h1>

        <p className="mb-8 text-lg font-medium text-[#4B5563] md:text-xl">
          Manage your agents, channels and data by chatting with AI
        </p>

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

      <div className="mx-auto mt-10 w-full max-w-5xl px-2">
        <div className="flex min-h-[360px] w-full items-center justify-center rounded-2xl border border-dashed border-[#4B5563]/40 bg-white/40 text-sm text-[#4B5563] md:min-h-[700px]">
          Video placeholder
        </div>
      </div>
    </section>
  );
}