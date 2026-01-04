// app/contact/page.jsx  (Next.js App Router)

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-800">

            {/* Header */}
            <section className="bg-indigo-600 text-white">
                <div className="max-w-5xl mx-auto px-6 py-16">
                    <h1 className="text-4xl font-bold mb-3">Contact Us</h1>
                    <p className="text-indigo-100 max-w-2xl">
                        Have questions, suggestions, or collaboration ideas? We’d love to hear from you.
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="max-w-5xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 gap-10">

                {/* Contact Info */}
                <div className="bg-white rounded-2xl shadow p-8 space-y-6">
                    <h2 className="text-2xl font-semibold">Get in Touch</h2>

                    <div>
                        <p className="font-medium">Email</p>
                        <p className="text-gray-600">romaan4244@gmail.com</p>
                    </div>

                    <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-gray-600">+92 341 6479008</p>
                    </div>

                    <div>
                        <p className="font-medium">Address</p>
                        <p className="text-gray-600">
                            Charsadda, KPK, Pakistan
                        </p>
                    </div>

                    <div>
                        <p className="font-medium">Follow Us</p>
                        <div className="flex space-x-4 mt-2">
                            <a href="#" className="text-indigo-600 hover:underline">Twitter</a>
                            <a href="#" className="text-indigo-600 hover:underline">Instagram</a>
                            <a href="#" className="text-indigo-600 hover:underline">LinkedIn</a>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white rounded-2xl shadow p-8">
                    <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>

                    <form className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium mb-1">Full Name</label>
                            <input
                                type="text"
                                placeholder="Your name"
                                className="w-full rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Email Address</label>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                className="w-full rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Message</label>
                            <textarea
                                rows="5"
                                placeholder="Write your message here..."
                                className="w-full rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-indigo-600 text-white font-medium py-3 rounded-xl hover:bg-indigo-700 transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

            </section>

        </main>
    );
}