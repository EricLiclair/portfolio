import React, { useState, useEffect } from "react";
import "./Body.css";
import Legend from "./Legend";
import Navbar from "./Navbar";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Home from "./Home";
import Blog from "./Blog";
import Footer from "./Footer";

export default function Body() {
  let pages = ["HOME", "BLOG", "CONTACT"];
  const [page, setpage] = useState("HOME");
  const changePage = function (page) {
    setpage(page);
  };

  const currentPage = function () {
    switch (page) {
      case "CONTACT":
        return <Contact />;

      case "PORTFOLIO":
        return <Portfolio />;

      case "HOME":
        return <Home callback={changePage} />;

      case "ABOUT":
        return <Legend />;

      case "BLOG":
        return <Blog />;

      default:
        break;
    }
  };

  useEffect(() => {
    document.getElementById("container").style.opacity = 1;
  }, [page]);

  return (
    <div id="container" className="container">
      <Legend />
      <div id="content" className="content">
        {currentPage()}
        <Footer />
      </div>
      <Navbar pages={pages} callback={changePage} page={page} />
    </div>
  );
}
