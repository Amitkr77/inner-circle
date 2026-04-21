/**

* @license
* SPDX-License-Identifier: Apache-2.0
  */

import React, { useState } from "react";
import { GlowBackground } from "./components/UI";
import {
  // Navbar,
  Hero,
  ExperienceShowcase,
  CorporateExperience,
  CommunitySection,
  HowItWorks,
  StatsSection,
  ContactSection,
  Footer,
  PastExpeditions,
} from "./components/Sections";
import { Navbar } from "./components/Navbar";

import { Experience } from "./constants";

// Pages
import RishikeshPage from "./pages/RishikeshPage";
import KashmirPage from "./pages/KashmirPage";
import DarjeelingPage from "./pages/DarjeelingPage";
import SikkimPage from "./pages/SikkimPage";
import MunnarPage from "./pages/MunnarPage";
import MeghalayaPage from "./pages/MeghalayaPage";

// ✅ APPLY / BOOK NOW PAGE
import MonolithRetreat from "./pages/MonolithRetreat";

// Page map
type PageProps = { onBack: () => void; onApply: () => void };

const PAGE_MAP: Record<string, React.ComponentType<PageProps>> = {
  "in-3": RishikeshPage,
  "in-4": KashmirPage,
  "in-1": DarjeelingPage,
  "in-2": SikkimPage,
  "in-5": MunnarPage,
  "in-6": MeghalayaPage,
};

export default function App() {
  const [activeExpId, setActiveExpId] = useState<string | null>(null);
  const [showApplyPage, setShowApplyPage] = useState(false);

  // 🔥 OPEN EXPERIENCE
  const handleOpenExp = (exp: Experience) => {
    if (!exp?.id) return;
    setActiveExpId(exp.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 🔙 BACK TO HOME
  const handleBack = () => {
    setActiveExpId(null);
    setTimeout(() => {
      document
        .getElementById("explore")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  // 🔥 APPLY / BOOK NOW OPEN
  const handleApplyOpen = () => {
    setShowApplyPage(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ✅ APPLY PAGE
  if (showApplyPage) {
    return <MonolithRetreat />;
  }

  // ✅ EXPERIENCE PAGE
  if (activeExpId && PAGE_MAP[activeExpId]) {
    const PageComponent = PAGE_MAP[activeExpId];
    return <PageComponent onBack={handleBack} onApply={handleApplyOpen} />;
  }

  // ✅ HOME PAGE
  return (
    <div className="relative min-h-screen selection:bg-accent-pink/30">
      {" "}
      <GlowBackground />
      {/* 🔥 NAVBAR WITH BOOK NOW */}
      <Navbar onBook={handleApplyOpen} />
      <main>
        <Hero />
        <StatsSection />
        <ExperienceShowcase onSelectExp={handleOpenExp} />
        <PastExpeditions />
        <CorporateExperience />
        <HowItWorks />
        <CommunitySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
