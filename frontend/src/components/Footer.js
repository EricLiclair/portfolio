import React, { useEffect } from "react";
import "./Footer.css";
import Typewriter from "typewriter-effect/dist/core";

export default function Footer() {
  useEffect(() => {
    const footerCode = document.getElementById("footercode");
    new Typewriter(footerCode, {
      strings: [
        "Made with ❤",
        `Website Code <a style="text-decoration: underline;" href="www.google.com">@GitHub</a>`,
      ],
      loop: true,
      autoStart: true,
    });
  }, []);
  return (
    <div className="footer">
      <p>© 2021</p>
      <p id="footercode"></p>
    </div>
  );
}
