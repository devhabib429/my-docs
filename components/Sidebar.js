export default function Sidebar() {
    return (
      <aside className="w-1/4 bg-gray-100 p-4">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Categories</h3>
          <ul>
            <li><a href="#" className="hover:text-blue-600">Web Development</a></li>
            <li><a href="#" className="hover:text-blue-600">Design</a></li>
            <li><a href="#" className="hover:text-blue-600">Tutorials</a></li>
          </ul>
        </div>
      </aside>
    );
  }
  