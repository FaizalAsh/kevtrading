import { Routes, Route } from "react-router-dom";

import Nav from "./Navigation/Nav";
import Home from "./Home/Home";
import Ourfirm from "./ourfirm/Ourfirm";
import SimpleCarousel from "./Simplecrousel/SimpleCarousel";
import Whatwedo from "./whatwedo/Whatwedo";
import Worldwide from "./worldwide/Worldwide";
import Investment from "./Investment/Investment";
import Login from "./Login/Login";

import "./App.css";
import Signup from "./Signup/Signup";

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ourfirm" element={<Ourfirm />} />
        <Route path="/carousel" element={<SimpleCarousel />} />
        <Route path="/whatwedo" element={<Whatwedo />} />
        <Route path="/worldwide" element={<Worldwide />} />
        <Route path="/investment" element={<Investment />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />

      </Routes>
    </>
  );
}

export default App;