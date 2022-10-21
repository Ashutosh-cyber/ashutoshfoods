import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "@mui/material";
import "../Styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="leftSide">
        <p>Contact Information</p>

        <div>
          <p>
            Mohan Parab: +91 8971758045 <br />
            Anurag M Parab: +91 7259120744
          </p>

          <p>Email:support@ashutoshfoods.com</p>
        </div>
      </div>

      <div className="rightSide">
        <div>
          <h2>Share us on</h2>
        </div>
        <div className="socialMedia">
          <Link href="#https://www.instagram.com/">
            <InstagramIcon />
          </Link>
          <TwitterIcon /> <FacebookIcon />
        </div>
        <p> &copy; 2022 ashutoshfoods.com</p>
      </div>
    </div>
  );
}

export default Footer;
