import { useState } from "react";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";

function App() {
  const [view, setView] = useState("desktop");

  return (
    <div>
      <Navbar view={view} setView={setView} />
      <Gallery view={view} />
    </div>
  );
}

export default App;