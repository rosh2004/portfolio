import React from 'react'
import { Badge } from './ui/badge'

type Props = {
  className?: string
}

function CoursesRow({className}: Props) {

  const courses = [
    'Programming Fundamentals',
    'Data Structures',
    'Object Oriented Programming (OOP)',
    'Algorithms',
    'Operating Systems',
    'Database Management Systems',
    'Software Engineering',
    'Assembly Language (COAL)',
    'Computer Architecture',
    'Computer Networks',
    'Machine Learning',
    'Numerical Analysis',
  ]

  return (
    <div className={`flex flex-wrap gap-2 ${className? className: ''}`}>
      {
        courses.map((course) => (
          <Badge variant='outline' className='text-foreground dark:text-foreground font-normal text-sm border-2 border-primary dark:border-primary' key={course}>{course}</Badge>
        ))
      }
    </div>
  )
}

export default CoursesRow