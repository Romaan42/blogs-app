import React from 'react'
import { FaHeart } from 'react-icons/fa6'

const Footer = () => {
    return (
        <div className='flex justify-center py-5 bg-gray-50 border-t border-gray-300'>
            <p className='flex'>© 2023 Mindful Blogger. All rights reserved. Designed with <FaHeart className="text-red-500" /> for the blogging community.</p>
        </div>
    )
}

export default Footer