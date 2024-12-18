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
          <Card className="bg-primary dark:bg-primary min-w-[280px]">
            <CardContent className="flex items-center justify-center m-6 p-0 relative">
              <Image src={project.image} alt={project.title} width={300} height={300} />
              <div className="absolute inset-0 flex justify-center items-end">
                <div className="w-[300px] h-[300px] flex justify-center items-end">
                  <Link href={project.sourceCodeLink} className="flex justify-center items-center flex-1 h-12 text-foreground-light bg-black/20 dark:bg-black/20 hover:bg-black/60 dark:hover:bg-black/60 rounded-none border-r border-foreground-light">
                    <FaCode />
                  </Link>
                  <Link href={project.projectLink} className="flex justify-center items-center flex-1 h-12 text-foreground-light bg-black/20 dark:bg-black/20 hover:bg-black/60 dark:hover:bg-black/60 rounded-none">
                    <FaEye />
                  </Link>
                </div>
              </div>
            </CardContent>
            <CardHeader className="pt-0 h-44 flex flex-col ">
              <CardTitle className="text-lg text-foreground-light dark:text-foreground-light">{project.title}</CardTitle>
              <CardDescription className="flex-grow text-sm text-foreground-light dark:text-foreground-light overflow-ellipsis ...">{project.description}</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </CarouselItem>
    )
  });
  return (
    <Carousel className="w-[70%] min-w-[300px] md:w-[90%] xl:w-[80%]">
        <CarouselContent>
          {renderedProjects}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
  )
}

export default ProjectsCarousel