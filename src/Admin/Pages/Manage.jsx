import Testimonioals from "../components/Table/Testimonioals";
import Blog from "../components/Table/Blog";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Comment from "../components/Table/Comment";
const Manage = () => {
  const isAuthenticated = localStorage.getItem("token") !== null;
  if (!isAuthenticated) {
    return <Navigate to="/home" />;
  }
  const [activeTab, setActiveTab] = useState("Blog");
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between px-2 py-2 ">
        <h2>#Manage</h2>
        <ul className="flex  gap-2 items-center">
          <li
            className="px-2 py-2 bg-slate-400 cursor-pointer text-white"
            onClick={() => setActiveTab("Blog")}
          >
            Blog
          </li>
          <li
            className="px-2 py-2 bg-slate-400 cursor-pointer text-white"
            onClick={() => setActiveTab("Testimonial")}
          >
            Testimonial
          </li>
          <li
            className="px-2 py-2 bg-slate-400 cursor-pointer text-white"
            onClick={() => setActiveTab("Comment")}
          >
            Comment
          </li>
        </ul>
      </div>

      {activeTab === "Blog" && <Blog />}
      {activeTab === "Testimonial" && <Testimonioals />}
      {activeTab === "Comment" && <Comment />}
    </div>
  );
};

export default Manage;
