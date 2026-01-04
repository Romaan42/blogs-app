import Blogs from '@/components/Blogs'
import React from 'react'

export default function AllBlogs() {
    return (
        <div>
            <Blogs />
            <button className="bg-primary text-white bg-blue-400 px-4 py-2 rounded-full font-medium hover:bg-blue-600 cursor-pointer     transition hidden md:block mt-10 lg:ml-10">
                View all
            </button>
        </div>
    )
}
