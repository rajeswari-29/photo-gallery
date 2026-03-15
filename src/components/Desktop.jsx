export default function Desktop({ photos, favorites, dispatch }) {
  return (
    <div className="grid grid-cols-4 gap-6">
      {photos.map((photo) => (
        <div key={photo.id} className="border rounded shadow p-2">
          <img
            src={`https://picsum.photos/id/${photo.id}/400/300`}
            className="w-full h-48 object-cover rounded"
          />

          <div className="flex justify-between mt-2">
            <p className="font-medium">{photo.author}</p>

            <button
              onClick={() =>
                dispatch({ type: "TOGGLE_FAV", payload: photo.id })
              }
            >
              {favorites.includes(photo.id) ? "❤️" : "🤍"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}