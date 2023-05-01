import "./App.css";

import Table from "./components/Table";
import Navigation from "./components/Nav";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/User";
import Attractions from "./pages/Attractions";
import Hotels from "./pages/Hotels";
import Restaurants from "./pages/Restaurants";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/attractions" element={<Attractions />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/restaurants" element={<Restaurants />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
