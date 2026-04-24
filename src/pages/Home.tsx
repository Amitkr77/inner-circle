import {
  Hero,
  ExperienceShowcase,
  CorporateExperience,
  CommunitySection,
  HowItWorks,
  ContactSection,
  PastExpeditions,
} from "../components/Sections";
import ClaritySection from "../components/ClaritySection";
import InsideRetreat from "../components/InsideRetreat";
import type { Experience } from "../constants";

export default function Home() {
  return (
    <div>
      <Hero />
      <ClaritySection />
      <ExperienceShowcase />
      <PastExpeditions />
      <CorporateExperience />
      <HowItWorks />
      <InsideRetreat />
      <CommunitySection />
      <ContactSection />
    </div>
  );
}
