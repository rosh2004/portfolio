import TechStacksRow from '@/components/TechStacksRow'
import Image from 'next/image'

function HomeSection() {

  return (
    <article>
      <div className='flex flex-col-reverse lg:flex-row lg:justify-between items-center'>
        <div className='lg:pr-14 '>
          <h1 className='lg:text-7xl md:text-5xl text-4xl font-medium mb-1'>Hi, I&apos;m <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'>Roshaan Siddiqui!</span></h1>
          <h2 className='lg:text-4xl md:text-3xl text-2xl font-medium opacity-60 '>Full Stack Web Developer</h2>
          <p className='dark:text-white/70 mt-6 leading-5 md:text-lg '>
            I&apos;m a <Strong>Senior Full-Stack Developer</Strong> with a frontend focus, passionate about creating modern, <Strong>Responsive Websites</Strong> and <Strong>Web Applications</Strong>.
            I have <Strong><span className='text-xl md:text-2xl'>5 years</span></Strong> of professional experience delivering enterprise-grade solutions.
            On Upwork, I&apos;ve completed <Strong>2,000+ hours</Strong>, earned <Strong>$32K+</Strong>, and maintained <Strong>100% Job Success</Strong>.
            I specialize in <Strong>Angular</Strong> (expert/primary), <Strong>React</Strong>, and <Strong>Next.js</Strong>, building scalable full-stack applications with modern technologies.
            I&apos;m always eager to learn new things and take on new challenges.
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