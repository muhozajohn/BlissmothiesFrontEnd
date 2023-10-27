import Home from "../pages/Home";
import About from "../components/about/About";
import Menu from "../components/menu/Menu";
import Contact from "../components/contact/Contact";
import Gallery from "../components/gallery/Gallery";
import Events from "../components/events/Events";
import { Routes, Route } from "react-router-dom";
import Table from "../components/table/Table";
import OneBlog from "../pages/OneBlog";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import UserCustomer from "../pages/UserCustomer";
import Layout from "../layout/Layout";
import DashLayout from "../layout/DashLayout";
import NotFound from "../pages/NotFound";
import Orders from "../Admin/Pages/Orders";
import Dashboard from "../Admin/Pages/Dashboard";
import Customers from "../Admin/Pages/Customers";
import Products from "../Admin/Pages/Products";
import GetHelp from "../Admin/Pages/GetHelp";
import Reports from "../Admin/Pages/Reports";
import Logout from "../Admin/Pages/Logout";
import Settings from "../Admin/Pages/Settings";
import Emails from "../Admin/Pages/Emails";
const Routers = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
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
          <Route path="/carts-items" element={<UserCustomer />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route element={<DashLayout />}>
          <Route path="*" element={<NotFound />} />
          <Route path="/Dashboard" index element={<Dashboard />} />
          <Route path="/Orders" element={<Orders />} />
          <Route path="/Customers" element={<Customers />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/GetHelp" element={<GetHelp />} />
          <Route path="/Reports" element={<Reports />} />
          <Route path="/Logout" element={<Logout />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/Emails" element={<Emails />} />
        </Route>
      </Routes>
    </>
  );
};

export default Routers;
