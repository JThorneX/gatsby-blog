import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";
import "../styles/aboutMe.css";

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <div className="aboutPageWrapper">
        <div className="aboutMeLayer">
          <div className="foxAbout">
            <StaticImage
              className="foxFooter"
              alt="a graphic of a fox wearing shades"
              src="../images/foxNoWatermarkSmaller.png"
            />
          </div>
          <div className="aboutMe">
            <p>
              I am Babi (JThorne).
              <br />
              <br />
              The purpose of this website is two-fold. <br /> <br /> This is a
              personal recipe blog for me to store my recipes so I don't have to
              rely on the scraps of paper that float around my house that I've
              scrawled my recipes on in my illegible handwriting. <br /> <br />
              Besides that, it is a project for me to play around with and learn
              the Gatsby framework. The GitHub Repo for this project is{" "}
              <a href="https://github.com/JThorneX/gatsby-blog" target="_blank">
                here
              </a>
              .
            </p>
          </div>
        </div>
        <div className="wireframing">
          <a
            href="https://www.figma.com/file/HToJP1esoNx1Ka7ej6A1pe/recipe-blog?type=design&node-id=43%3A79&mode=design&t=F4zA25QyHLK7SNy5-1"
            target="_blank"
          >
            <p className="wireframingBox">Wireframing for this project</p>
          </a>
        </div>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="About Me" />;
export default AboutPage;
