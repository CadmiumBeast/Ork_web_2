import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import IntelligenceSection from "./components/IntelligenceSection";
import AgentsSection from "./components/AgentsSection";

export default function Home() {
  return (
    <>
      <div className="w-full bg-[#FFEDEB]">
        <main className="mx-auto w-full max-w-6xl px-6 pb-7 pt-28 md:px-10 md:pb-9 md:pt-32">
          <Header />
          <HeroSection />
        </main>
      </div>
      <IntelligenceSection />
      <AgentsSection />
    </>
  );
}
