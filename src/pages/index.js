import * as React from "react";
import Layout from "../components/layout";
// import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";
import { Link } from "gatsby";
import "../styles/index.css";
import "../styles/home.css";

const IndexPage = () => {
  return (
    <Layout pageTitle="Welcome">
      <div className="homeContainer">
        <p>Pick your poison:</p>
        <div className="tagSelect">
          <div className="tagBox tagSweet">
            <Link to="/tags/sweet" style={{ textDecoration: "none" }}>
              <h2 className="text">Sweet</h2>
            </Link>
          </div>
          <div className="tagBox tagSavory">
            <Link to="/tags/savory" style={{ textDecoration: "none" }}>
              <h2 className="text">Savory</h2>
            </Link>
          </div>
        </div>
        <div className="allRecipesContainer">
          <div className="tagLongBox tagAll">
            <Link to="/tags/recipe" style={{ textDecoration: "none" }}>
              <h2 className="longText">All Recipes</h2>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="Home Page" />;
export default IndexPage;
