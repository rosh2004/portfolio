import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image";
import { FaCode, FaEye } from "react-icons/fa";
import Link from "next/link";
import { Project } from "../../types";

type Props = {
  projectList: Project[];
}

function ProjectsCarousel({projectList}: Props) {
  const renderedProjects = projectList.map((project, index) => {
    return (
      <CarouselItem key={index} className="md:basis-1/2 lg:basis-[47%] xl:basis-1/3 2xl:basis-1/4">
        <div className="p-1 ">
          <Card className="min-w-[280px] md:min-w-[330px]">
            <CardContent className="flex items-center justify-center m-6 p-0 relative">
              <Link href={project.images[0]} target="_blank">
                <Image src={project.images[0]} alt={project.title} height={300} width={300} className="h-[300px] w-[300px] object-cover"/>
              </Link>
              <div className="absolute bottom-0 inset-x-0 flex justify-center">
                <div className="w-[300px] flex justify-center items-end">
                  {project.sourceCodeLink && <Link href={project.sourceCodeLink} className="flex justify-center items-center flex-1 h-12 text-foreground-light bg-black/80 dark:bg-black/80 hover:bg-black dark:hover:bg-black rounded-none border-r border-foreground-light">
                    <FaCode />
                  </Link>}
                  {project.projectLink && <Link href={project.projectLink} className="flex justify-center items-center flex-1 h-12 text-foreground-light bg-black/80 dark:bg-black/80 hover:bg-black dark:hover:bg-black rounded-none">
                    <FaEye />
                  </Link>}
                </div>
              </div>
            </CardContent>
            <CardHeader className="pt-0 h-44 flex flex-col ">
              <CardTitle className="text-lg">{project.title}</CardTitle>
              <CardDescription className="flex-grow text-sm overflow-ellipsis ...">{project.description}</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </CarouselItem>
    )
  });
  return (
    <Carousel className="w-[70%] min-w-[300px] md:w-[90%] xl:w-[80%]">
        <CarouselContent className="justify-around">
          {renderedProjects}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
  )
}

export default ProjectsCarousel