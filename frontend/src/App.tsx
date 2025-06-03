import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
