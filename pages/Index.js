import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto p-4 flex space-x-8">
                <main className="w-3/4">
                    <article className="bg-white p-6 shadow-lg mb-6">
                        <h1 className="text-3xl font-semibold">Welcome to My Blog</h1>
                        <p className="mt-4">This is a blog post.</p>
                    </article>
                </main>
                <Sidebar />
            </div>
            <Footer />
        </div>
    )
}
