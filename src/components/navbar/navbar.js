import { useState } from "react";
import "./navbar.scss";
import "../../styles.scss";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const onClickContact = (e) => {
    e && e.preventDefault();
    document.getElementById("contact").scrollIntoView();
    setIsNavExpanded(false);
  };

  const onClickExperience = (e) => {
    e && e.preventDefault();
    document.getElementById("experience").scrollIntoView();
    setIsNavExpanded(false);
  };

  return (
    <section className="navigation-wrapper">
      <nav className="navigation container">
        <a href="/" className="name-btn">
          Greg Fouzie
        </a>
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul>
            <li>
              <div
                className="section-link"
                onClick={() => {
                  setIsNavExpanded(false);
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }}
              >
                Home
              </div>
            </li>
            <li>
              <div className="section-link" onClick={() => onClickExperience()}>
                Experience
              </div>
            </li>
            <li>
              <div className="section-link" onClick={() => onClickContact()}>
                Contact
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
}
