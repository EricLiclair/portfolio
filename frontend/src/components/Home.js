import React, { useEffect } from "react";
import "./Home.css";
import Typewriter from "typewriter-effect/dist/core";

export default function Home(props) {
  const changePage = props.callback;
  const pageChanger = function () {
    changePage("CONTACT");
  };
  useEffect(() => {
    document.getElementById("home-container").style.opacity = 1;
    const code = document.getElementById("typewriter");
    new Typewriter(code, {
      strings: [
        "I create websites",
        "I design pleasant websites",
        "I make memorable user experiences",
        "I like to contribute to open source softwares",
        "I write about React, Django and Python",
        "Fun Fact: I have never eaten a pizza 🍕",
      ],
      loop: true,
      autoStart: true,
    });
  }, []);
  return (
    <div id="home-container" className="home-container">
      <div className="banner">
        <div className="text">
          <h1>Discover my Amazing Art Space!</h1>
          <p>
            {`<`}
            <span className="code">{`code`}</span>
            {`>`}
            <span id="typewriter"></span>
            {""}
            {`</`}
            <span className="code">{`code`}</span>
            {`>`}
          </p>
          <input
            onClick={pageChanger}
            type="submit"
            className="submit-button"
            value="Contact Me"
            id="homeSubmit"
          ></input>
        </div>
        <div className="image"></div>
      </div>
      <h4>Recommendations</h4>
      <div className="testimonials">
        <div className="testimonial">
          <h4>Harsh Akshit</h4>
          <img src="/media/testiments/yash.jpeg" alt="" />
          <p>
            Organiser
            <br />
            <strong>Google Developer Group, Ranchi</strong>
          </p>
          <span>
            Shubham has had me perceive frontend development through a whole new
            lens. A diligent, warm, and creative individual who keeps tossing a
            lot of ideas on the table. It's absolutely a breeze to work with a
            teammate like him.
          </span>
        </div>
        <div className="testimonial">
          <h4>Yash Pandey</h4>
          <img src="/media/testiments/yash.jpeg" alt="" />
          <p>
            Co-ordinator
            <br />
            <strong>
              Web-App Community,
              <br />
              House of Geeks
            </strong>
          </p>
          <span>
            Shubham has had me perceive frontend development through a whole new
            lens. A diligent, warm, and creative individual who keeps tossing a
            lot of ideas on the table. It's absolutely a breeze to work with a
            teammate like him.
          </span>
        </div>
        <div className="testimonial">
          <h4>Saheb Kumar</h4>
          <img src="/media/testiments/saheb.jpg" />
          <p>
            Co-ordinator
            <br />
            <strong>
              Competetive Community,
              <br />
              House of Geeks
            </strong>
          </p>
          <span>
            Shubham takes interest in the work he takes up and achieves results.
            A team player, works with everyone and helps everyone, is extremely
            dedicated and no matter what task is assigned he puts in 100% effort
            and is committed to completing the work on time. Highly dependable
            and is not averse to spending more time to get the work done.
          </span>
        </div>
      </div>
    </div>
  );
}
