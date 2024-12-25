'use client'

import React from 'react'
import { Button } from './ui/button'

type Props = {
  children: React.ReactNode
}

function CallToAction({children}: Props) {
  const handleClick = () => {
    const element = document.getElementById('contact-me-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Button 
      className='text-md font-bold w-[100px] md:w-[128px] bg-primary dark:bg-primary hover:bg-accent dark:hover:bg-accent text-foreground-light dark:text-foreground-light'
      onClick={handleClick}
    >
      {children}
    </Button>
  )
}

export default CallToAction