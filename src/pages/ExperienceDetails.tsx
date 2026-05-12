import { useParams } from "react-router-dom";
import { EXPERIENCES } from "../constants";
import { ExperienceDetail } from "../components/ExperienceDetail";

export default function ExperienceDetails() {
  const { slug } = useParams();

  const exp = EXPERIENCES.find((e) => e.slug === slug);

  if (!exp) return <div>Experience not found</div>;

  return <ExperienceDetail exp={exp} />;
}