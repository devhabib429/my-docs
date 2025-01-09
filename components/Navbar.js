import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-blue-600 text-white p-4">
            <div className="container mx-auto flex justify-between">
                <div className="text-xl font-semibold">My Blog</div>
                <div className="space-x-4">
                    <Link href="/" passHref>
                        <a className="hover:text-gray-200">Home</a>
                    </Link>
                    <Link href="/about" passHref>
                        <a className="hover:text-gray-200">About</a>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
