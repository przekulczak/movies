import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Topbar } from "./components";
import { Movies, Movie, Favourites } from "./pages";
function App() {
  return (
    <>
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
