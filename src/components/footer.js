import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="footerWrapper">
      <div className="footerImageL">
        <StaticImage
          className="foxFooter"
          alt="a graphic of a fox wearing shades"
          src="../images/foxNoWatermarkSmaller.png"
        />
      </div>
      <div className="textWrapper">
        <div className="footerText">
          <p>
            WELCOME TO DILTSO - THE ONE STOP SHOP FOR ALL THE RECIPES I FORGET
            FREQUENTLY. DO YOU HAVE CONCERNING MEMORY PROBLEMS LIKE ME? THEN
            THIS IS THE BLOG FOR YOU. EXCEPT IT’S NOT, IT’S FOR ME. YOU HAVE TO
            MAKE YOUR OWN.
          </p>
        </div>
        <div className="footerCopy">
          <p>&#169; 2023 DILTSO JTHORNE</p>
        </div>
      </div>
      <div className="footerImageR">
        <StaticImage
          className="foxFooter"
          alt="a graphic of a fox wearing shades"
          src="../images/foxNoWatermarkSmaller.png"
        />
      </div>
    </div>
  );
};

export default Footer;
