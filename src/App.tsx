/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { GlowBackground } from "./components/UI";
import {
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
import Contact from "./pages/contact";
import MonolithRetreat from "./pages/MonolithRetreat";
import InsideRetreat from "./components/InsideRetreat";
import ClaritySection from "./components/ClaritySection";

// Types
type PageProps = { onBack: () => void; onApply: () => void };

// ✅ PAGE MAP (future use)
const PAGE_MAP: Record<string, React.ComponentType<PageProps>> = {};

// ✅ LAYOUT (Reusable for all pages)
function Layout({
  children,
  onBook,
}: {
  children: React.ReactNode;
  onBook: () => void;
}) {
  return (
    <div className="relative min-h-screen selection:bg-accent-pink/30">
      <GlowBackground />
      <Navbar onBook={onBook} />

      <main>{children}</main>

      <Footer />
    </div>
  );
}

// ✅ HOME COMPONENT
function Home({
  handleOpenExp,
  handleApplyOpen,
}: {
  handleOpenExp: (exp: Experience) => void;
  handleApplyOpen: () => void;
}) {
  return (
    <>
      <Hero />
      <StatsSection />
      <ExperienceShowcase onSelectExp={handleOpenExp} />
      <PastExpeditions />
      <CorporateExperience />
      <HowItWorks />
      <CommunitySection />
      <ContactSection />
    </>
  );
}

// ✅ MAIN APP
export default function App() {
  const [activeExpId, setActiveExpId] = useState<string | null>(null);
  const [showApplyPage, setShowApplyPage] = useState(false);

  const handleOpenExp = (exp: Experience) => {
    if (!exp?.id) return;
    setActiveExpId(exp.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBack = () => {
    setActiveExpId(null);
    setTimeout(() => {
      document
        .getElementById("explore")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleApplyOpen = () => {
    setShowApplyPage(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
<<<<<<< HEAD
    <BrowserRouter>
      <Routes>

        {/* 🔥 HOME */}
        <Route
          path="/"
          element={
            <Layout onBook={handleApplyOpen}>
              {activeExpId && PAGE_MAP[activeExpId] ? (
                (() => {
                  const PageComponent = PAGE_MAP[activeExpId];
                  return (
                    <PageComponent
                      onBack={handleBack}
                      onApply={handleApplyOpen}
                    />
                  );
                })()
              ) : showApplyPage ? (
                <MonolithRetreat />
              ) : (
                <Home
                  handleOpenExp={handleOpenExp}
                  handleApplyOpen={handleApplyOpen}
                />
              )}
            </Layout>
          }
        />

        {/* 🔥 CONTACT PAGE */}
        <Route
          path="/contact"
          element={
            <Layout onBook={handleApplyOpen}>
              <Contact />
            </Layout>
          }
        />

      </Routes>
    </BrowserRouter>
=======
    <div className="relative min-h-screen selection:bg-accent-pink/30">
      {" "}
      <GlowBackground />
      {/* 🔥 NAVBAR WITH BOOK NOW */}
      <Navbar onBook={handleApplyOpen} />
      <main>
        <Hero />
        {/* <StatsSection /> */}
        <ClaritySection/>
        <ExperienceShowcase onSelectExp={handleOpenExp} />
        {/* <PastExpeditions /> */}
        <CorporateExperience />
        <HowItWorks />
        <InsideRetreat/>
        <CommunitySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
>>>>>>> 515ff3b678137b0ca4109ca43a65407e8f21c9e3
  );
}