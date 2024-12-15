import Link from 'next/link'
import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

type Props = {
  type?: 'phone' | 'email' | 'github' | 'linkedin' | 'twitter';
}

function SocialHandle({type}: Props) {
  let href='/'
  let Icon = null;
  const iconClass = 'w-full h-full';
  switch (type) {
    case 'linkedin':
      href = process.env.LINKEDIN_HREF ?? '/';
      Icon = <FaLinkedin className={iconClass}/>;      ;
      break;
    case 'twitter':
      href = process.env.TWITTER_HREF ?? '/';
      Icon =<FaXTwitter className={iconClass}/>;
      break;
    case 'github':
      href = process.env.GITHUB_HREF ?? '/';
      Icon =<FaGithub className={iconClass}/>;
      break;
    case 'phone':
      href = process.env.PHONE_HREF ?? '/';
      Icon =<FaPhone className={iconClass}/>;
      break;
    case 'email':
      href = process.env.EMAIL_HREF ?? '/';
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