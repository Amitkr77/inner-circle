import {
  Hero,
  ExperienceShowcase,
  CorporateExperience,
  CommunitySection,
  HowItWorks,
  ContactSection,
} from "../components/Sections";
import ClaritySection from "../components/ClaritySection";
import InsideRetreat from "../components/InsideRetreat";

export default function Home() {
  return (
    <div>
      <Hero />
      <ClaritySection />
      <ExperienceShowcase />
      <CorporateExperience />
      <HowItWorks />
      <InsideRetreat />
      <CommunitySection />
      <ContactSection />
    </div>
  );
}
