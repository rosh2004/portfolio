import SectionHeading from "@/components/ui/SectionHeading"
import { ProjectList } from "../lib/project-data"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import IconBar from "@/components/timeline/IconBar";
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";

function ProjectsSection() {
  const personalProjectList = ProjectList.filter(project => project.type === 'personal');
  const professionalProjectList = ProjectList.filter(project => project.type === 'professional');

  const renderedProfessionalProjects = professionalProjectList.map((project, index) => (
    <Card key={index} className="flex flex-col">
      <CardHeader>
        <CardTitle className="pb-2">{project.title}</CardTitle>
      </CardHeader>
        <div className="flex flex-col justify-start px-6">
          <CardDescription>{project.description}</CardDescription>
          { (project.icons && project.icons?.length > 0) && <IconBar icons={project.icons} />}
        </div>
      <CardContent className="flex flex-1 items-end xl:h-[400px] pb-2">
        <Carousel className="w-10/12 max-w-[220px] sm:max-w-sm md:max-w-lg mx-auto">
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

  const renderedPersonalProjects = personalProjectList.map((project, index) => (
    <Card
      key={index}
      className="group flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
    >
      <CardContent className="relative p-0 overflow-hidden">
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Link href={project.images[0] ?? ''} target="_blank">
            <Image
              src={project.images[0]}
              alt={project.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </Link>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="absolute bottom-0 inset-x-0 flex justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <div className="w-full flex">
            {project.sourceCodeLink && (
              <Link
                href={project.sourceCodeLink}
                target="_blank"
                className={`flex justify-center items-center gap-2 flex-1 h-12 text-white bg-black/90 hover:bg-primary transition-colors duration-200 ${project.projectLink ? 'border-r border-white/20' : ''}`}
              >
                <FaCode className="w-4 h-4" />
                <span className="text-sm font-medium">Code</span>
              </Link>
            )}
            {project.projectLink && (
              <Link
                href={project.projectLink}
                target="_blank"
                className="flex justify-center items-center gap-2 flex-1 h-12 text-white bg-black/90 hover:bg-primary transition-colors duration-200"
              >
                <FaExternalLinkAlt className="w-4 h-4" />
                <span className="text-sm font-medium">Live</span>
              </Link>
            )}
          </div>
        </div>
      </CardContent>
      <CardHeader className="flex-1 flex flex-col gap-2 pt-4">
        <CardTitle className="text-lg leading-tight line-clamp-2">{project.title}</CardTitle>
        <CardDescription className="flex-grow text-sm line-clamp-3">{project.description}</CardDescription>
      </CardHeader>
    </Card>
  ))

  return (
    <div>
      <article>
        <SectionHeading>Projects</SectionHeading>
        {professionalProjectList.length > 0 &&
          <>
            <h3 className='text-3xl md:text-5xl font-medium mb-1'>Professional</h3>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 p-2 sm:p-8">
              {renderedProfessionalProjects}
            </div>
          </>
        }
        {personalProjectList.length > 0 &&
          <>
            <h3 className='text-3xl md:text-5xl font-medium mb-4 mt-8'>Personal</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-2 sm:p-8">
              {renderedPersonalProjects}
            </div>
          </>
        }
      </article>
    </div>
  )
}

export default ProjectsSection
