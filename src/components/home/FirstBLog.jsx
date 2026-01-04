import { FaArrowRightLong } from "react-icons/fa6";


export default function FirstBLog() {
    return (
        <div className='bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 shadow-md'>
            <div className='flex'>
                <div className='flex-grow'>
                    <div className='bg-green-600 inline py-1 px-3 text-white font-bold rounded-2xl'>
                        Featured
                    </div>
                    <h1 className='capitalize text-3xl font-semibold mt-3 font-serif text-gray-900'>The artso of mindful Living in a Digital World</h1>
                    <p className='mt-4 text-lg text-gray-600'>Discover how to cultivate presence and intentionality amidst the noise of modern technology. Learn practical techniques to balance digital consumption with real-world connection.

                    </p>
                    <div className="flex items-center mb-6 mt-6">
                        <div className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center text-white font-bold mr-3">
                            JS
                        </div>
                        <div>
                            <p className="font-medium">Jane Smith</p>
                            <p className="text-gray-500 text-sm">May 15, 2023 · 8 min read</p>
                        </div>
                    </div>
                    <div className='text-blue-500 font-semibold flex items-center gap-2 cursor-pointer hover:translate-x-10 transition-all duration-300'>
                        Read full article <FaArrowRightLong />
                    </div>
                </div>
                <div className='w-[74%]  mt-8 md:mt-0 rounded-2xl'>
                    <img className='w-full rounded-2xl' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9NxVa2mbygkogxqj0VCfaBmAYTj6ZBCsiEA&s" alt="blog image" />
                </div>
            </div>
        </div>
    )
}
