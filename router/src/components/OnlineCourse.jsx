import React from 'react'
import { CourseCard } from './CourseCard'
import { onlineCourses } from '../constants/courses'

export function OnlineCourse() {
    return (
        <main className="flex gap-4 bg-gray-100 max-w-4xl">
            {
                onlineCourses.map((course) => <CourseCard course={course} />)
            }
        </main>
    )
}