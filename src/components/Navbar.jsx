import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top  navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand fw-bold">Ismail</a>

          <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse justify-content-end ${isOpen ? "show" : "  "}`}
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#work">
                  Work
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
