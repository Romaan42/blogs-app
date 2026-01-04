import Link from 'next/link'
import { LiaBlogSolid } from "react-icons/lia";

import React from 'react'

const Header = () => {
    return (
        <div className='bg-white py-4 px-20 flex justify-between'>
            <div className='flex items-center text-blue-700'>
                <LiaBlogSolid size={28} />
                <span className='text-xl font-semibold'>Blogger</span>
            </div>
            <div className='flex gap-10'>
                <Link className='text-gray-700 font-semibold transition-all hover:text-blue-500' href={'/'}>Home</Link>
                <Link className='text-gray-700 font-semibold transition-all hover:text-blue-500' href={'/blogs'}>All posts</Link>
                <Link className='text-gray-700 font-semibold transition-all hover:text-blue-500' href={'/about'}>About</Link>
                <Link className='text-gray-700 font-semibold transition-all hover:text-blue-500' href={'/contact'}>Contact</Link>
            </div>
        </div>
    )
}

export default Header