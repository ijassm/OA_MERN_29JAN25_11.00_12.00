import { CourseCard } from "./CourseCard"
import { offlineCourses } from '../constants/courses'

export const OfflineCourse = () => {
    return (
        <main className="flex gap-4 bg-gray-100 max-w-4xl">
            <main className="flex gap-4 bg-gray-100 max-w-4xl">
                {
                    offlineCourses.map((course) => <CourseCard course={course} />)
                }
            </main>
        </main>
    )
}
