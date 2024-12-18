
import ProjectsCarousel from "@/components/ProjectsCarousel"
import SectionHeading from "@/components/ui/SectionHeading"
import { ProjectList } from "../utils/project-data"
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa";

type Props = {}

function ProjectsSection({}: Props) {
  const projectList = ProjectList;
  return (
    <div>
      <article>
        <SectionHeading>Projects</SectionHeading>
        <div className="flex justify-center mx-auto p-12">
          <ProjectsCarousel projectList={projectList}></ProjectsCarousel>
        </div>
        <div className="flex justify-center">
          <Button className="text-xl py-6 w-[280px] bg-gradient-to-r from-primary to-secondary hover:from-accent hover:to-secondary text-foreground-light dark:text-foreground-light">See More <FaArrowRight /></Button>
        </div>
      </article>
    </div>
  )
}

export default ProjectsSection