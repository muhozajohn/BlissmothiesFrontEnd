import Home from "../pages/Home";
import About from "../components/about/About";
import Menu from "../components/menu/Menu";
import Contact from "../components/contact/Contact";
import Gallery from "../components/gallery/Gallery";
import Events from "../components/events/Events";
import { Routes, Route } from "react-router-dom";
import Table from "../components/table/Table";
import OneBlog from "../pages/OneBlog";
import Login from "../pages/Login" 
import Signup from "../pages/Signup";
import UserCustomer from "../pages/UserCustomer";
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
      <Route path="/book-table" element={<Table />} />
      <Route path="/blog" element={<OneBlog />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/user" element={<UserCustomer />} />
    </Routes>
  );
};

export default Routers;
