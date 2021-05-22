import React, { useState, useEffect } from "react";
import "./Legend.css";

export default function Legend() {
  const [infobar, setinfobar] = useState(false);

  const toggleIconClicked = function () {
    setinfobar(!infobar);
  };

  useEffect(() => {
    document.getElementById("info-bar").style.animationName = "slidein";
  }, []);
  return (
    <div className="legend">
      <div className="profile">
        {infobar ? (
          <div className="legend-toggle">
            <i className="fas fa-ellipsis-h legend-toggle-icon"></i>
          </div>
        ) : null}
        <img src="/media/profile.png"></img>
        <h5>Shubham Kushwaha</h5>
        <p>Full Stack Developer</p>
      </div>
      <div id="info-bar" className="info-bar">
        <div className="info">
          <ul>
            <li>
              <h6>Residence:</h6>
              <span>India</span>
            </li>
            <li>
              <h6>City:</h6>
              <span>Vizag</span>
            </li>
            <li>
              <h6>Age:</h6>
              <span>20</span>
            </li>
          </ul>
        </div>
        <div className="divider"></div>
        <div className="info">
          <h6>About Me</h6>
          <p>
            A sophomore at Indian Institute of Information Technology, Ranchi
            persuing Computer Science and Engineering
            <br />
            <br />
            A Full-Stack Python Developer with experience in creating Websites,
            Web Applications and GUI Applications
            <br />
            <br />
            Open Source Contributor{" "}
            <a
              href="https://github.com/facebook/TestSlide/issues?q=author%3AEricLiclair"
              className="highlight"
            >
              @Facebook
            </a>{" "}
            and{" "}
            <a
              href="https://github.com/fossasia/pslab-python/pulls?q=is%3Apr+author%3AEricLiclair+is%3Aclosed"
              className="highlight"
            >
              @Fossasia
            </a>{" "}
            <br />
            <br />A technical writer{" "}
            <a
              href="https://medium.com/analytics-vidhya/django-react-integration-37acc304e984"
              className="highlight"
            >
              @AnalyticsVidhya
            </a>
            , a Python and Data Science community
            <br />
            <br />
            An active member of the organising team{" "}
            <a
              href="https://www.instagram.com/p/CCV5OCfg-CN/?utm_source=ig_web_copy_link"
              className="highlight"
            >
              @GDGRanchi
            </a>{" "}
            <br />
            <br />
            Event organiser{" "}
            <a href="/media/octocon.png" className="highlight">
              @HouseOfGeeks
            </a>
            , technical society of IIIT Ranchi
          </p>
        </div>
        <div className="divider"></div>
        <div className="info">
          <h6>Languages</h6>
          <ul>
            <li>
              <span>Python</span>
            </li>
            <li>
              <span>JavaScript</span>
            </li>
            <li>
              <span>C++</span>
            </li>
          </ul>
        </div>
        <div className="divider"></div>
        <div className="info">
          <h6>Tech</h6>
          <ul>
            <li>
              <span>Django</span>
            </li>
            <li>
              <span>React</span>
            </li>
            <li>
              <span>Figma</span>
            </li>
          </ul>
        </div>
        <div className="divider"></div>
        <div className="info">
          <h6>Skills</h6>
          <ul>
            <li>
              <span>Software Development</span>
            </li>
            <li>
              <span>Web Development</span>
            </li>
            <li>
              <span>Software Testing</span>
            </li>
            <li>
              <span>Bot Development</span>
            </li>
            <li>
              <span>UI/UX</span>
            </li>
            <li>
              <span></span>
            </li>
          </ul>
        </div>
        <div className="divider"></div>
        <div className="info">
          <a href="/media/CV.pdf" className="download-cv" download>
            DOWNLOAD CV {""}
            <i className="fas fa-download"></i>
          </a>
        </div>
      </div>
      <div className="social-links">
        <a
          title="Github"
          className="social-icon"
          href="https://github.com/EricLiclair"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          title="Twitter"
          className="social-icon"
          href="https://twitter.com/ericliclair"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          title="LinkedIn"
          className="social-icon"
          href="https://www.linkedin.com/in/ericliclair/"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a
          title="Medium"
          className="social-icon"
          href="https://eric-liclair.medium.com/"
        >
          <i className="fab fa-medium-m"></i>
        </a>
      </div>
    </div>
  );
}
