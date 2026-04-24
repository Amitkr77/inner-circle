import { useParams } from "react-router-dom";
import { EXPERIENCES } from "../constants";
import { ExperienceDetail } from "../components/ExperienceDetail";

export default function ExperienceDetails() {
  const { id } = useParams();

  const exp = EXPERIENCES.find((e) => e.id === id);

  if (!exp) return <div>Experience not found</div>;

  return <ExperienceDetail exp={exp} />;
}
