export default function Navbar({ view, setView, searchTerm, setSearchTerm }) {
  return (
    <nav className="flex flex-wrap justify-between items-center gap-3 bg-gray-800 text-white px-6 py-3">
      <div className="flex items-center gap-4">
        {/* Title */}
        <h1 className="text-xl font-bold">Photo Gallery</h1>

        {/* Search */}
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="search by author name"
          className="rounded px-2 py-1 text-black"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <button
          onClick={() => setView("desktop")}
          className={`px-4 py-1 rounded ${
            view === "desktop" ? "bg-blue-600" : "bg-blue-400"
          }`}
        >
          Desktop
        </button>

        <button
          onClick={() => setView("tablet")}
          className={`px-4 py-1 rounded ${
            view === "tablet" ? "bg-green-600" : "bg-green-400"
          }`}
        >
          Tablet
        </button>

        <button
          onClick={() => setView("mobile")}
          className={`px-4 py-1 rounded ${
            view === "mobile" ? "bg-purple-600" : "bg-purple-400"
          }`}
        >
          Mobile
        </button>
      </div>
    </nav>
  );
}