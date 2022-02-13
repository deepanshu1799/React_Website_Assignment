import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core'
import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
  return (
    <BottomNavigation >
    <div className="footer">
      <div className="socialMedia">
        
          <BottomNavigationAction  color="red" label="Facebook" value="recents" icon={<FacebookIcon  style={{fill: "#3b5998"}}/>} />
          <BottomNavigationAction label="Twitter" value="favorites" icon={<TwitterIcon  style={{fill: "#1DA1F2"}}/>} />
          <BottomNavigationAction label="Instagram" value="nearby" icon={<InstagramIcon  style={{fill: " #bc2a8d"}}/>} />
          <BottomNavigationAction label="GitHub" value="nearby" icon={<GitHubIcon  style={{fill: " #211F1F"}}/>} />
        
      </div>
     
    </div>
    </BottomNavigation>
  );
}

export default Footer;
