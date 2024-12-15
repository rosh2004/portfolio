import React from 'react'
import { Button } from './ui/button'

type Props = {
  text: string
}

function CallToAction({text}: Props) {
  return (
    <Button className='text-md bg-primary font-bold w-[128px] dark:bg-primary'>{text}</Button>
  )
}

export default CallToAction