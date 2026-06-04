import { BrowserRouter, Routes, Route } from "react-router-dom";
import Api from "./Api";
import MovieDetails from "./MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Api />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
