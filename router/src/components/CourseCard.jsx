export const CourseCard = ({ course }) => {

    return (
        <main className='text-xl my-6'>
            <img className='w-full' src={course.image} alt="js" />
            <article>
                <h1 className="text-2xl font-bold my-2">{course.title}</h1>
                <p className='my-2 max-w-2xl'>
                    {course.description}
                </p>
                <p className='my-2 max-w-2xl'>
                    <strong>Duration:</strong> {course.duration}
                </p>
                <p className='my-2 max-w-2xl'>
                    <strong>Price:</strong> {course.price}
                </p>
                <p className='my-2 max-w-2xl'>
                    <strong>Instructor:</strong> {course.instructor}
                </p>
            </article>
            <a href="https://www.udemy.com/course/the-complete-javascript-course/" target="_blank" rel="noopener noreferrer" className='inline-block bg-blue-500 text-white px-4 py-2 rounded my-2'>Enroll Now</a>

        </main>
    )
}
