import TechStacksRow from '@/components/TechStacksRow'
import SocialHandle from '@/components/ui/SocialHandle'
import Image from 'next/image'

function HomeSection() {

  return (
    <article>
      <div className='flex flex-col-reverse lg:flex-row lg:justify-between items-center'>
        <div className='lg:pr-14 '>
          <h1 className='lg:text-7xl md:text-5xl text-4xl font-medium mb-1'>Hi, I&apos;m <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'>Roshaan Siddiqui!</span></h1>
          <h2 className='lg:text-4xl md:text-3xl text-2xl font-medium opacity-60 '>Full Stack Web Developer</h2>
          <p className='dark:text-white/70 mt-6 leading-5 md:text-lg '>
            I&apos;m a professional <Strong>Full Stack Web Developer</Strong> with a passion for creating modern, <Strong>Responsive Websites</Strong> and <Strong>Web Applications</Strong>.
            I have around <Strong><span className='text-xl md:text-2xl'>4 Years</span></Strong> of professional experience at a Software Company.
            I specialize in building <Strong>Full-Stack</Strong> applications using the <Strong>latest technologies and frameworks</Strong>. 
            I&apos;m always eager to learn new things and take on new challenges. 
            Recently I have started working on <Strong>NextJS</Strong>, I am proefficient in <Strong>React</Strong> and <Strong>Angular</Strong>
          </p>
          <TechStacksRow className='mt-6' />
        </div>
        <div className='flex justify-center w-[300px] md:min-w-[300px] mb-4 lg:my-6'>
          <Image src="/images/self-portrait.jpg" alt="Roshaan Siddiqui's Profile Photo" 
            width={500} height={500} className='rounded-full border-8 border-primary mb-4 mt-6 md:my-0 '
          />
        </div>
      </div>
    </article>
  )
}

export default HomeSection

function Strong({children}: {children: React.ReactNode}) {
  return <strong className='font-bold text-primary'>{children}</strong>
}