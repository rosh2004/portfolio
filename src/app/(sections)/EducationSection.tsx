import CoursesRow from "@/components/CoursesRow"
import SectionHeading from "@/components/ui/SectionHeading"
import Image from "next/image"


function EducationSection() {
  return (
    <article>
      <SectionHeading>Education</SectionHeading>
      <div className='flex flex-col-reverse lg:flex-row lg:justify-center items-center'>
        <div className="max-w-[800px]">
          <h3 className='text-4xl font-medium mb-1'>University of Engineering and Technology</h3>
          <h4 className='text-2xl font-medium opacity-60 '>Lahore, Pakistan</h4>
          <p className='text-foreground mt-6 leading-5 md:text-lg'>
            I have completed my 4 years degree of Bachelors in Computer Engineering from the University of Engineering and Technology, Lahore. With my orientation more towards Computer Science courses while I really enjoyed the low level side of computer and programming.
          </p>
          <CoursesRow className='mt-6' />
        </div>
        <Image className="m-6" src="/images/uet-lahore.png" width={250} height={250} alt="Logo of University of Engineering and Technology"></Image>
      </div>
    </article>
  )
}

export default EducationSection