export default function Navbar({ view, setView }) {
  return (
    <nav className="flex justify-between items-center bg-gray-800 text-white px-6 py-3">
      
      {/* Title */}
      <h1 className="text-xl font-bold">Photo Gallery</h1>

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