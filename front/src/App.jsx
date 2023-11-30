import "./App.css";
import Home from "./Home";
import Create from "./Create";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Read from "./Read";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/read/:id" element={<Read />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
