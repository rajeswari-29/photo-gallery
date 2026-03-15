export default function Mobile({ photos, favorites, dispatch }) {
  return (
    <div className="grid grid-cols-1 gap-6 max-w-sm mx-auto">
      {photos.map((photo) => (
        <div key={photo.id} className="border rounded-lg shadow p-2">

          <img
            src={`https://picsum.photos/id/${photo.id}/400/250`}
            alt={photo.author}
            className="w-full h-40 object-cover rounded"
          />

          <div className="flex justify-between mt-2">
            <p>{photo.author}</p>

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