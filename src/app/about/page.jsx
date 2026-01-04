import Link from "next/link";


export default function AboutPage() {
    return (
        <main className="bg-gray-50 text-gray-800 min-h-screen">
            {/* Hero Section */}
            <section className="bg-indigo-600 text-white">
                <div className="max-w-5xl mx-auto px-6 py-16">
                    <h1 className="text-4xl font-bold mb-4">About Us</h1>
                    <p className="text-indigo-100 max-w-2xl">
                        Learn more about our blog, our mission, and the passion behind the content we create.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="max-w-5xl mx-auto px-6 py-14 space-y-10">
                {/* Who We Are */}
                <div className="bg-white rounded-2xl shadow p-8">
                    <h2 className="text-2xl font-semibold mb-3">Who We Are</h2>
                    <p className="text-gray-600 leading-relaxed">
                        We are passionate writers and creators who love sharing knowledge, ideas, and real-world experiences.
                        This blog was created to inspire, educate, and help readers grow through meaningful content.
                    </p>
                </div>

                {/* Our Mission */}
                <div className="bg-white rounded-2xl shadow p-8">
                    <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Our mission is to provide high-quality articles on technology, lifestyle, and tutorials that are
                        easy to understand, practical, and valuable for everyone.
                    </p>
                </div>

                {/* What We Write About */}
                <div className="bg-white rounded-2xl shadow p-8">
                    <h2 className="text-2xl font-semibold mb-3">What We Write About</h2>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li>Technology & Web Development</li>
                        <li>Blogging & Content Creation</li>
                        <li>Productivity & Lifestyle</li>
                        <li>Step-by-step Tutorials</li>
                    </ul>
                </div>

                {/* Call to Action */}
                <div className="bg-indigo-600 text-white rounded-2xl p-8 text-center">
                    <h2 className="text-2xl font-semibold mb-3">Stay Connected</h2>
                    <p className="text-indigo-100 mb-6">
                        Follow our blog for regular updates and helpful content.
                    </p>
                    <Link
                        href="/"
                        className="inline-block bg-white text-indigo-600 font-medium px-6 py-3 rounded-xl hover:bg-gray-100 transition"
                    >
                        Back to Home
                    </Link>
                </div>
            </section>
        </main>
    );
}