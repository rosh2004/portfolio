import { Metadata } from 'next'
import { IoIosConstruct } from 'react-icons/io'

export const metadata: Metadata = {
  title: "Blogs"
}

function Blogs() {
  return (
    <main className='h-[400px] bg-sectionBg flex justify-center items-center'>
      
      <h1 className='flex flex-col gap-2 items-center lg:text-7xl md:text-5xl text-4xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'>
        <IoIosConstruct className='text-9xl  md:text-7xl text-primary'></IoIosConstruct>
        <div className='p-2'>Sorry! No Blogs Yet</div>
      </h1>
    </main>
  )
}

export default Blogs