import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Join from "./pages/Join";

import Navbar from "./components/Navbar";
import SingleCard from "./pages/SingleCard";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/join" element={<Join />} />
        <Route exact path="/add" element={<SingleCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
