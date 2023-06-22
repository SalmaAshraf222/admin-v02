import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/User";
import Attractions from "./pages/Attractions";
import Hotels from "./pages/Hotels";
import Restaurants from "./pages/Restaurants";
import Requests from "./pages/Requests";


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
          <Route path="/requests" element={<Requests />} />
        </Routes>
      </BrowserRouter>
    </> 
  );
}

export default App;
