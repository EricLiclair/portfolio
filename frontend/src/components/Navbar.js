import React, { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar(props) {
  const changePage = props.callback;
  const pages = props.pages;
  const page = props.page;

  const [navbarexpanded, setnavbarexpanded] = useState(false);

  const toggleIconClicked = function () {
    setnavbarexpanded(!navbarexpanded);
  };

  //   highlighting the active page
  const links = document.getElementsByClassName("nav-links-link");
  const checkActive = function () {
    for (let i = 0; i < links.length; i++) {
      let element = links[i];
      if (element.innerHTML == page) {
        element.classList.add("active");
        element.classList.remove("inactive");
      } else {
        element.classList.add("inactive");
        element.classList.remove("active");
      }
    }
  };

  //   to change the current active page
  const pageChanger = function (e) {
    changePage(e.target.innerHTML);
    setnavbarexpanded(!navbarexpanded);
  };

  useEffect(() => {
    const navbar = document.getElementById("navbar");
    const content = document.getElementById("content");
    const currentPage = document.getElementById("current-page");
    const navLinks = document.getElementById("navLinks");
    navbarexpanded
      ? ((navbar.style.right = "0px"),
        (currentPage.style.opacity = 0),
        (content.style.transform = "translateX(-160px)"),
        (content.style.opacity = 0),
        (navLinks.style.transform = "translateX(0)"),
        (navLinks.style.opacity = 1))
      : ((navbar.style.right = "-160px"),
        (content.style.transform = "translateX(0)"),
        (content.style.opacity = 1),
        (currentPage.style.opacity = 1),
        (navLinks.style.transform = "translateX(160px)"),
        (navLinks.style.opacity = 0));
    checkActive();
  }, [navbarexpanded, page]);

  return (
    <div id="navbar" className="navbar">
      <div className="toggle-icon-container">
        <div onClick={toggleIconClicked} className="icon">
          {navbarexpanded ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </div>
      </div>
      <a id="current-page" className="current-page">
        {page}
      </a>

      <div className="nav-links" id="navLinks">
        <ul>
          {pages.map((page) => {
            return (
              <li key={page}>
                <a className="nav-links-link" onClick={pageChanger}>
                  {page}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="toggle-icon-container"></div>
    </div>
  );
}
