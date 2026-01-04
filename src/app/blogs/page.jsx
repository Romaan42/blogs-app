import Link from 'next/link';
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'


export default async function Blogs() {
    const res = fetch("http://localhost:3000/api/get-post-data", { cache: 'no-store' });
    const data = await (await res).json();
    const blogs = data.posts;


    return (
        <div>
            <div className='bg-blue-700 flex flex-col items-center p-10'>
                <h1 className='text-3xl font-bold text-white'>All Blog Posts</h1>
                <h3 className='mt-2 text-xxl text-white'>Browse all articles and updates</h3>
            </div>
            <div className='p-5 flex flex-col gap-y-4'>
                {blogs?.map((val) => (

                    <div key={val._id} className='bg-white p-6 rounded-2xl shadow'>
                        <Link href={`/blog/${val._id}`} className="text-4xl font-bold text-gray-800 mb-6 mt-5 ml-3 cursor-pointer">
                            {val.title}
                        </Link>
                        <p className='text-1xl text-gray-500'>{val.date}</p>
                        <div className='flex'>
                            <div className='py-4 text-gray-800 basis-3/3'>{val.shortDesc}</div>
                            <div className='basis-1/3 ml-5'>
                                <img className='' src={val.image} alt="Blog Image" />
                            </div>
                        </div>
                        <button className='flex items-center text-blue-500 cursor-pointer hover:translate-x-5 duration-300'>Read more <FaArrowRightLong className='mt-1 ml-2' />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}
