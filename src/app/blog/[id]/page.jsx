import React from 'react'

const page = async ({ params }) => {
    const { id } = await params;

    const res = fetch(`http://localhost:3000/api/get-post/${id}`, { cache: 'no-store' });
    const data = await (await res).json();
    const blog = data.posts;


    return (
        <main className="max-w-4xl mx-auto px-4 py-12">

            <header className="mb-10">
                <p className="text-sm text-gray-500 mb-2">
                    Technology • July 12, 2025
                </p>

                <h1 className="text-4xl font-bold leading-tight mb-4">

                    {blog?.title}
                </h1>

                <p className="text-lg text-gray-600 leading-relaxed">
                    {blog?.shortDesc}
                </p>
            </header>
            <article className="bg-white rounded-2xl shadow-lg p-8 space-y-6">

                <img src={blog?.image} alt="Blog Image" className="w-full h-auto rounded-lg mb-6" />

                <div className="prose prose-lg max-w-none">
                    <p dangerouslySetInnerHTML={{ __html: blog.content }}></p>
                </div>

            </article>
        </main>
    )
}

export default page