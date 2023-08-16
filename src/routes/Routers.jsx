import Home from "../pages/Home";
import About from "../components/about/About";
import Menu from "../components/menu/Menu";
import Contact from "../components/contact/Contact";
import Gallery from "../components/gallery/Gallery";
import Events from "../components/events/Events";
import { Routes, Route } from "react-router-dom";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/Menulist" element={<Menu />} />
      <Route path="/events" element={<Events />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default Routers;
