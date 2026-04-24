/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

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
import About from "./pages/about";
import RishikeshPage from "./pages/RishikeshPage";
import KashmirPage from "./pages/KashmirPage";
import DarjeelingPage from "./pages/DarjeelingPage";
import SikkimPage from "./pages/SikkimPage";
import MunnarPage from "./pages/MunnarPage";
import MeghalayaPage from "./pages/MeghalayaPage";
import MonolithRetreat from "./pages/MonolithRetreat";

// Types
type PageProps = { onBack: () => void; onApply: () => void };

// Page Map
const PAGE_MAP: Record<string, React.ComponentType<PageProps>> = {
  "in-3": RishikeshPage,
  "in-4": KashmirPage,
  "in-1": DarjeelingPage,
  "in-2": SikkimPage,
  "in-5": MunnarPage,
  "in-6": MeghalayaPage,
};


// ✅ COMMON LAYOUT (Navbar + Footer everywhere)
function Layout({
  children,
  onBook,
}: {
  children: React.ReactNode;
  onBook?: () => void;
}) {
  return (
    <div className="relative min-h-screen selection:bg-accent-pink/30">
      <GlowBackground />
      <Navbar onBook={onBook || (() => {})} />

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


// ✅ EXPERIENCE PAGE WRAPPER
function ExperiencePage({
  activeExpId,
  handleBack,
  handleApplyOpen,
}: {
  activeExpId: string;
  handleBack: () => void;
  handleApplyOpen: () => void;
}) {
  const PageComponent = PAGE_MAP[activeExpId];
  if (!PageComponent) return null;

  return <PageComponent onBack={handleBack} onApply={handleApplyOpen} />;
}


// ✅ INNER APP
function AppInner() {
  const navigate = useNavigate();
  const [activeExpId, setActiveExpId] = useState<string | null>(null);
  const [showApplyPage, setShowApplyPage] = useState(false);

  const handleOpenExp = (exp: Experience) => {
    if (!exp?.id) return;
    setActiveExpId(exp.id);
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBack = () => {
    setActiveExpId(null);
    setShowApplyPage(false);
    navigate("/");
    setTimeout(() => {
      document.getElementById("explore")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };

  const handleApplyOpen = () => {
    setShowApplyPage(true);
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 🔥 APPLY PAGE
  if (showApplyPage) {
    return (
      <Layout onBook={handleApplyOpen}>
        <MonolithRetreat />
      </Layout>
    );
  }

  // 🔥 EXPERIENCE PAGE
  if (activeExpId && PAGE_MAP[activeExpId]) {
    return (
      <Layout onBook={handleApplyOpen}>
        <ExperiencePage
          activeExpId={activeExpId}
          handleBack={handleBack}
          handleApplyOpen={handleApplyOpen}
        />
      </Layout>
    );
  }

  // ✅ NORMAL ROUTES
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout onBook={handleApplyOpen}>
            <Home
              handleOpenExp={handleOpenExp}
              handleApplyOpen={handleApplyOpen}
            />
          </Layout>
        }
      />

      <Route
        path="/contact"
        element={
          <Layout onBook={handleApplyOpen}>
            <Contact />
          </Layout>
        }
      />

      <Route
        path="/about"
        element={
          <Layout onBook={handleApplyOpen}>
            <About />
          </Layout>
        }
      />
    </Routes>
  );
}


// ✅ ROOT APP
export default function App() {
  return <AppInner /> ;
}