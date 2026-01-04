import Link from 'next/link';
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'


export default async function Blogs() {
    const res = await fetch("http://localhost:3000/api/get-post-data", { cache: 'no-store' });
    const data = await res.json();
    const blogs = data.posts;
    return (
        <div className='flex gap-10 mt-20'>

            <div className='basis-full flex flex-col gap-y-4'>
                {blogs?.map((val) => (
                    <div key={val._id} className='bg-white p-6 rounded-2xl shadow'>
                        <Link href={`/blog/${val._id}`} className='text-2xl font-semibold mb-3'>{val.title}</Link>
                        <p className='text-1xl text-gray-500'>{val.date}</p>
                        <p className='py-4 text-gray-800'>{val.shortDesc}</p>
                        <button className='flex items-center text-blue-500 cursor-pointer hover:translate-x-5 duration-300'>Read more <FaArrowRightLong className='mt-1 ml-2' />
                        </button>
                    </div>
                ))}


            </div>
            <div className='basis-130 flex flex-col gap-y-4'>
                <div className='p-5 bg-white rounded-lg shadow-2xs'>
                    <h1 className='text-xxl font-semibold'>About Me</h1>
                    <p className='text-gray-700 mt-3'>Welcome to Mindful Blogger, a space dedicated to exploring intentional living, personal growth, and finding balance in our fast-paced world.</p>
                </div>
                <div className='p-4 bg-white rounded-lg shadow-2xs'>
                    <h1 className='text-xxl font-semibold'>Categories</h1>
                    <ul className='text-sm flex flex-col gap-x-8 mt-5'>
                        <li className='p-1 text-gray-700 hover:text-blue-500 transition-all duration-200 cursor-pointer'>Technology</li>
                        <li className='p-1 text-gray-700 hover:text-blue-500 transition-all duration-200 cursor-pointer'>Lifestyle</li>
                        <li className='p-1 text-gray-700 hover:text-blue-500 transition-all duration-200 cursor-pointer'>Tutorials</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
