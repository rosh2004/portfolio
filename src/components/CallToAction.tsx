import React from 'react'
import { Button } from './ui/button'

type Props = {
  children: React.ReactNode
}

function CallToAction({children}: Props) {
  return (
    <Button className='text-md font-bold w-[80px] md:w-[128px] bg-primary dark:bg-primary hover:bg-accent dark:hover:bg-accent text-foreground-light dark:text-foreground-light'>{children}</Button>
  )
}

export default CallToAction