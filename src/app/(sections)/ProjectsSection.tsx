
import ProjectsCarousel from "@/components/ProjectsCarousel"
import SectionHeading from "@/components/ui/SectionHeading"
import { ProjectList } from "../lib/project-data"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { FaArrowRight } from "react-icons/fa";

function ProjectsSection() {
  const personalProjectList = ProjectList.filter(project => project.type === 'personal');
  const professionalProjectList = ProjectList.filter(project => project.type === 'professional');

  const renderedProfessionalProjects = professionalProjectList.map((project, index) => (
    <Card key={index} className="flex flex-col">
      <CardHeader className="xl:h-[180px]">
        <CardTitle className="pb-2">{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex items-center xl:h-[400px] pb-2">
        <Carousel className="w-full max-w-[220px] sm:max-w-sm md:max-w-lg mx-auto">
          <CarouselContent>
            {project.images.map((image, index) => (
              <CarouselItem key={image} className="flex items-center">
                <div className="h-[300px] w-full relative">
                  <Link href={image} target="_blank" >
                    <Image  src={image} alt={`${project.title}-image[${index}]`} fill sizes="20" className="object-contain"/>
                  </Link>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </CardContent>
    </Card>
  ))
  return (
    <div>
      <article>
        <SectionHeading>Projects</SectionHeading>
        {professionalProjectList.length > 0 && 
          <>
            <h3 className='text-3xl md:text-5xl font-medium mb-1'>Professional</h3>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 p-8">
              {renderedProfessionalProjects}
            </div>
          </>
        }
        {personalProjectList.length > 0 && 
          <>
            <h3 className='text-3xl md:text-5xl font-medium mb-1'>Personal</h3>
            <div className="flex justify-center mx-auto p-6">
              <ProjectsCarousel projectList={personalProjectList}></ProjectsCarousel>
            </div>
          </>
        }
        {/* <div className="flex justify-center">
          <Button className="text-xl py-6 w-[280px] bg-gradient-to-r from-primary to-secondary hover:from-accent hover:to-secondary text-foreground-light dark:text-foreground-light">See More <FaArrowRight /></Button>
        </div> */}
      </article>
    </div>
  )
}

export default ProjectsSection