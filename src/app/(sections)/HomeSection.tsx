import TechStacksRow from '@/components/TechStacksRow'
import SocialHandle from '@/components/ui/SocialHandle'
import Image from 'next/image'

function HomeSection() {
  return (
    <div>
      <div className='flex flex-col-reverse lg:flex-row lg:justify-between items-center'>
        <div className='lg:pr-14 '>
          <h1 className='lg:text-7xl md:text-5xl text-4xl font-medium mb-1'>Hi, I&apos;m <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'>Roshaan Siddiqui!</span></h1>
          <h2 className='lg:text-4xl md:text-3xl text-2xl font-medium opacity-60 '>Full Stack Web Developer</h2>
          <p className='text-foreground mt-6 leading-5 md:text-lg'>
            I&apos;m a professional web developer with a passion for creating modern, responsive websites and applications. I specialize in building full-stack applications using the latest technologies and frameworks. I'm always eager to learn new things and take on new challenges.
          </p>
          <TechStacksRow className='mt-6' />
        </div>
        <div className='flex justify-center w-[300px] md:min-w-[300px] mb-4 lg:my-6'>
          <Image src="/images/self-portrait.jpg" alt="Roshaan Siddiqui's Profile Photo" 
            width={500} height={500} className='rounded-full border-8 border-primary mb-4 mt-6 md:my-0 '
          />
        </div>
      </div>
      <div className="flex justify-center gap-4 md:gap-8 mt-10">
        <SocialHandle type='linkedin'>
        </SocialHandle>
        <SocialHandle type='github'>
        </SocialHandle>
        <SocialHandle type='twitter'>
        </SocialHandle>
        <SocialHandle type='phone'>
        </SocialHandle>
        <SocialHandle type='email'>
        </SocialHandle>

      </div>
    </div>
  )
}

export default HomeSection