import { useReducer } from "react";
import useFetchPhotos from "../hooks/useFetchPhotos";
import { favouriteReducer } from "../reducer/favouriteReducer";

import Desktop from "./Desktop";
import Tablet from "./Tablet";
import Mobile from "./Mobile";

export default function Gallery({ view, searchTerm }) {
  const { photos, loading, error } = useFetchPhotos();

  const [favorites, dispatch] = useReducer(
    favouriteReducer,
    JSON.parse(localStorage.getItem("favorites")) || []
  );
  

  const filteredPhotos = photos.filter((photo) =>
    photo.author.toLowerCase().includes(searchTerm.toLowerCase())
  );


  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-6">
      {view === "desktop" && (
        <Desktop photos={filteredPhotos} favorites={favorites} dispatch={dispatch} />
      )}

      {view === "tablet" && (
        <Tablet photos={filteredPhotos} favorites={favorites} dispatch={dispatch} />
      )}

      {view === "mobile" && (
        <Mobile photos={filteredPhotos} favorites={favorites} dispatch={dispatch} />
      )}
    </div>
  );
}