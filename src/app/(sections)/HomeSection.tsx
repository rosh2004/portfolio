import Image from 'next/image'

function HomeSection() {
  return (
    <div className='flex flex-col-reverse md:flex-row md:justify-between items-center'>
      <div>
        <h1 className='md:text-7xl text-4xl font-roboto font-medium'>Hi, <span>Roshaan here!</span></h1>
        <h2 className='md:text-5xl text-2xl font-roboto font-medium opacity-50'>Full Stack Web Developer</h2>
      </div>
      <div className='flex justify-center'>
        <Image src="/images/self-portrait.jpg" alt="Roshaan Siddiqui's Profile Photo" 
          width={300} height={300} className='rounded-full border-8 border-primary mx-2 my-8 '
        />
      </div>
    </div>
  )
}

export default HomeSection