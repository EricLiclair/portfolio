import "./Portfolio.css";
import React, { useEffect } from "react";

export default function Portfolio() {
  useEffect(() => {
    document.getElementById("portfolio-container").style.opacity = 1;
  }, []);
  return <div id="portfolio-container" className="portfolio-container"></div>;
}
