import { useState } from "react";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";

function App() {
  const [view, setView] = useState("desktop");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <Navbar
        view={view}
        setView={setView}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <Gallery view={view} searchTerm={searchTerm} />
    </div>
  );
}

export default App;