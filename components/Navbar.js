export default function Navbar() {
    return (
      <nav className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between">
          <div className="text-xl font-semibold">My Blog</div>
          <div className="space-x-4">
            <a href="/" className="hover:text-gray-200">Home</a>
            <a href="/about" className="hover:text-gray-200">About</a>
          </div>
        </div>
      </nav>
    );
  }
  