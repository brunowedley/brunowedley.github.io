import React from "react";
import myImage from "../images/pngwing.com.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
  return (
    <div className="navbar-color">
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <a className="navbar-brand" href="#"><img className="imageLogo" src={myImage} alt="logo" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <FontAwesomeIcon icon={faBars} style={ { color: "#fff"} }/>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">about me</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">portfolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">contacts</a>
          </li>
        </ul>
      </div>
    </div>
    </nav>
    </div>
  )
}

export default Navbar;
