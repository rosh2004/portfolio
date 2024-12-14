import React from 'react'
import { Button } from './ui/button'

type Props = {
  text: string
}

function CallToAction({text}: Props) {
  return (
    <Button className='text-md bg-prim font-bold w-[128px]'>{text}</Button>
  )
}

export default CallToAction