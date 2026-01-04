"use client";

import { useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { LuLogOut } from "react-icons/lu";
import { logoutAdmin } from "@/actions/adminActions";
import { useRouter } from "next/navigation";


export default function AddBlogPage() {
    const router = useRouter();

    const imageRef = useRef();
    const [message, setMessage] = useState(null);
    const [image, setImage] = useState(null);
    const [serverImage, setServerImage] = useState(null);
    const [loading, setLoading] = useState(false);

    const [title, setTitle] = useState("best blog title");
    const [shortDesc, setShortDesc] = useState("best short description");
    const [content, setContent] = useState("i want to make a blog website in next js and tailwind css");

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("shortDesc", shortDesc);
        formData.append("content", content);
        formData.append("file", serverImage);
        setLoading(true);
        await fetch('/api/add-blog', {
            method: 'POST',
            body: formData,
        });
        setLoading(false);
        setMessage("Blog added successfully");


    };

    const onFileChange = (e) => {
        const file = e.target.files[0];
        setImage(URL.createObjectURL(file));
        setServerImage(file);
    };

    const handleLogout = async () => {
        await logoutAdmin();
        router.refresh();

    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="relative w-full max-w-xl bg-white shadow-lg rounded-lg p-6">
                <LuLogOut className="absolute top-3 right-3 text-3xl cursor-pointer hover:-translate-x-3 duration-200" onClick={handleLogout} />

                <h1 className="text-2xl font-bold mb-4 text-gray-800">Add New Blog</h1>

                {message && (
                    <p className="mb-4 text-sm text-center text-blue-600">{message}</p>
                )}
                {loading && (
                    <p className="mb-4 text-3xl text-center text-blue-600">Loading</p>
                )}

                <form
                    action={handleSubmit}
                    className="space-y-4"
                >
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Blog Title
                        </label>
                        <input
                            type="text"
                            name="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter blog title"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Short description
                        </label>
                        <textarea
                            rows="3"
                            name="shortDesc"
                            value={shortDesc}
                            onChange={(e) => setShortDesc(e.target.value)}
                            className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Write your blog content..."
                        ></textarea>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Blog Content
                        </label>
                        <textarea
                            rows="6"
                            name="content"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Write your blog content..."
                        ></textarea>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Blog Image
                        </label>
                        {image ? (
                            <div className="relative">
                                <RxCross2
                                    className="absolute top-2 right-3 text-red-500 text-2xl cursor-pointer"
                                    onClick={() => setImage(null)}
                                />
                                <img
                                    src={image}
                                    className="mt-3 cursor-pointer w-full min-h-20 rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        ) : (
                            <button
                                type="button"
                                onClick={() => imageRef.current.click()}
                                rows="6"
                                name="content"
                                className="mt-3 cursor-pointer w-full min-h-20 rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Write your blog content..."
                            >
                                Select image
                            </button>
                        )}
                    </div>

                    <input
                        type="file"
                        name="image"
                        accept="image/*"
                        hidden
                        ref={imageRef}
                        onChange={onFileChange}
                    />
                    <button
                        type="submit"
                        disabled={loading}
                        className={`${loading ? "opacity-50" : ""} w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition cursor-pointer`}
                    >
                        Add Blog
                    </button>
                </form>
            </div>
        </div >
    );
}
