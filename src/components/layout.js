import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  siteTitle,
  siteTitleLink,
  headerNav,
  headerContainer,
  headerSecond,
  layoutWrapper,
} from "../styles/header.module.css";
import Footer from "../components/footer";
import "../styles/home.css";
import { BiHome } from "react-icons/bi";
import { LiaGitlab } from "react-icons/lia";
import { BsTags } from "react-icons/bs";
import { GrGithub } from "react-icons/gr";
import { GiEvilBook } from "react-icons/gi";
import { Mobilenav } from "./mobilenav";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <div className={layoutWrapper}>
      <div className={container}>
        <div className={headerContainer}>
          <header className={siteTitle}>
            <Link to="/" className={siteTitleLink}>
              {data.site.siteMetadata.title}
            </Link>
            <p>Where am I</p>
          </header>
          <div className={headerSecond}>
            <Mobilenav />
            <nav className={headerNav}>
              <ul className={navLinks}>
                <li className={navLinkItem}>
                  <Link to="/" className="navIcon">
                    <BiHome size="40" />
                    <p>Home</p>
                  </Link>
                </li>
                <li className={navLinkItem}>
                  <Link to="/about" className="navIcon" size="40">
                    <LiaGitlab size="40" />
                    <p>About</p>
                  </Link>
                </li>
                <li className={navLinkItem}>
                  <Link to="/blog" className="navIcon">
                    <GiEvilBook size="40" className="icon" />
                    <p>Blog Posts</p>
                  </Link>
                </li>
                <li className={navLinkItem}>
                  <Link to="/tags" className="navIcon">
                    <BsTags size="40" className="icon" />
                    <p>All tags</p>
                  </Link>
                </li>
                <li className={navLinkItem}>
                  <a
                    href="https://github.com/JThorneX/gatsby-blog"
                    target="_blank"
                    className="navIcon"
                  >
                    <GrGithub size="40" />
                    <p>GitHub</p>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <main>
          <h1 className={heading}>{pageTitle}</h1>
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
