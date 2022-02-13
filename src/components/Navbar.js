import React, { useState } from "react";
import Logo from "../assets/logo.png";
import user_profile from "../user_profile.svg";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
     <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} /> 
      <div className="middle"></div>
        <input className="form-control"  type="search"  placeholder="Search For Videos" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>       
        <div className="rightSide">
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              User Name
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <Link to="/contact"> Edit Profile </Link>
            <Link to="/"> Log Out </Link>
            </ul>
          </div>
        <img src={user_profile} />
      </div>
     </div>
    </div>
    
  );
}

export default Navbar;
