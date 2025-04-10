import React from 'react'
import { Navbar } from '../components/navbar'
import { NavLink } from 'react-router'
import { OnlineCourse } from '../components/OnlineCourse'
import { OfflineCourse } from '../components/OfflineCourse'

export function Course() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center h-screen bg-gray-100 py-12">
                <h1 className="text-4xl font-bold my-2">Welcome to the Course Page</h1>
                <p className='my-2 text-center max-w-2xl'>
                    Here you can find information about the courses we offer. Choose between online and offline courses to suit your learning style.
                </p>
                <div className='flex gap-4 text-xl my-6'>
                    <NavLink to="online">Online course</NavLink>
                    <NavLink to="offline">Offline course</NavLink>
                </div>
                <OnlineCourse />

            </div>
        </>
    )
}

