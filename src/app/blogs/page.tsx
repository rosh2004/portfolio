import { redirect } from 'next/navigation'
import { BLOG_URL } from '@/app/lib/constants'

export default function Blogs() {
  redirect(BLOG_URL)
}
