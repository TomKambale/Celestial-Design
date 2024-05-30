import React from "react";
import image from "../assets/Celestial.jpg";
import { Container } from "@mui/material";

function Header() {
  return (
    <Container sx={{ mt: 4, mb: 4 }}>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={image} alt="Celestial Designs" width="30" height="24" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <a className="nav-link active" href="#">
              About Us
            </a>
            <a className="nav-link active" href="#">
              Services
            </a>
            <a className="nav-link active" href="#">
              Projects
            </a>
            <a className="nav-link active" href="#">
              FAQs
            </a>
            <a className="nav-link active" href="#">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
    </Container>
  );
}

export default Header;
