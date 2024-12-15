import Link from 'next/link'
import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';

type Props = {
  type?: 'phone' | 'email' | 'github' | 'linkedin' | 'twitter';
}

function SocialHandle({type}: Props) {
  let href='/'
  let Icon = null;
  const iconClass = 'w-full h-full';
  switch (type) {
    case 'linkedin':
      href = 'https://www.linkedin.com/in/rosh-siddiqui/';
      Icon = <FaLinkedin className={iconClass}/>;      ;
      break;
    case 'twitter':
      href = 'https://x.com/roshaandev';
      Icon =<FaX className={iconClass}/>;
      break;
    case 'github':
      href = 'https://github.com/rosh2004/';
      Icon =<FaGithub className={iconClass}/>;
      break;
    case 'phone':
      href = 'tel:+923343366194';
      Icon =<FaPhone className={iconClass}/>;
      break;
    case 'email':
      href = 'mailto:roshaan20043@gmail.com';
      Icon =<FaEnvelope className={iconClass}/>;
      break;
    default:
      Icon = null;
  }
  return (
    <Link href={href} className='w-14 h-14 p-4 hover:text-accent dark:hover:text-accent hover:bg-white/10 dark:hover:bg-black/80 md:w-16 md:h-16 rounded-full text-primary dark:text-primary flex items-center justify-center shadow-lg  dark:shadow-black shadow-black/20'>
      {Icon}
    </Link>
  )
}

export default SocialHandle