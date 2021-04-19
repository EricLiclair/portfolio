import "./Contact.css";

import React, { useEffect } from "react";

export default function Contact() {
  const setFormActive = function (e) {
    e.target.style.borderColor = "var(--primary-color)";
    document.getElementById(e.target.id + "-icon").style.color = "#20202a";
  };
  const setFormInactive = function (e) {
    e.target.style.borderColor = "#20202a";
    document.getElementById(e.target.id + "-icon").style.color = "#fafafc";
  };

  const formLabels = {
    Name: "text",
    Email: "email",
    Message: "textarea",
  };

  const formIcon = {
    Name: "user",
    Email: "at",
    Message: "envelope",
  };

  useEffect(() => {
    document.getElementById("contact-container").style.opacity = 1;
  }, []);

  return (
    <div id="contact-container" className="contact-container">
      <h4>Contact information</h4>
      <div className="contact-information">
        <div className="card">
          <ul>
            <li>
              <h6>Country:</h6>
              <span>India</span>
            </li>
            <li>
              <h6>City:</h6>
              <span>Vizag</span>
            </li>
            <li>
              <h6>Area:</h6>
              <span>Ashoka Park</span>
            </li>
          </ul>
        </div>
        <div className="card">
          <ul>
            <li>
              <h6>Email:</h6>
              <span>eric.liclair@gmai.com</span>
            </li>
            <li>
              <h6>Instagram:</h6>
              <span>@ericliclair</span>
            </li>
            <li>
              <h6>Phone:</h6>
              <span>+91 97026 03642</span>
            </li>
          </ul>
        </div>
      </div>

      <h4>Get in touch</h4>
      <div className="contact-form">
        <form action="/api/contact-form" method="POST">
          {Object.keys(formLabels).map((label, key) => {
            if (formLabels[label] !== "textarea") {
              return (
                <label className="form-label" key={key}>
                  <i
                    id={`${label}-icon`}
                    className={`fas fa-${formIcon[label]}`}
                  ></i>
                  <input
                    onFocus={setFormActive}
                    onBlur={setFormInactive}
                    placeholder={label}
                    type={formLabels[label]}
                    name={label}
                    id={label}
                    required={true}
                  />
                </label>
              );
            } else {
              return (
                <label className="form-label" key={key}>
                  <i
                    id={`${label}-icon`}
                    className={`fas fa-${formIcon[label]}`}
                  ></i>
                  <textarea
                    onFocus={setFormActive}
                    onBlur={setFormInactive}
                    placeholder={label}
                    name={label}
                    id={label}
                    rows={7}
                    required={true}
                  />
                </label>
              );
            }
          })}
          <input className="submit-button" type="submit" />
        </form>
      </div>
    </div>
  );
}
