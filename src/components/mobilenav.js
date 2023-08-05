import React, { useState } from "react";
import { Link } from "gatsby";
import { mobileContainer, menu } from "../styles/header.module.css";
import "../styles/index.css";

export function Mobilenav() {
  const [list, setList] = useState(false);
  return (
    <div className={mobileContainer} style={{ width: "100%" }}>
      <div
        onClick={() => (list ? setList(false) : setList(true))}
        style={{
          marginBottom: 40,
          marginRight: "auto",
          width: 50,
          height: 35,
          cursor: "pointer",
        }}
      >
        <div className={menu} />
        <div className={menu} />
        <div className={menu} />
      </div>
      {list ? (
        <div
          className="menuList"
          style={{
            backgroundColor: "var(--violet)",
            margin: "auto",
            padding: 40,
          }}
        >
          <p className="mobileMenu" style={{ width: "100%" }}>
            <Link to="/" style={{ color: "var(--frenchGrey)" }}>
              Home
            </Link>
          </p>
          <p className="mobileMenu" style={{ width: "100%" }}>
            <Link to="/about" style={{ color: "var(--frenchGrey)" }}>
              About
            </Link>
          </p>
          <p className="mobileMenu" style={{ width: "100%" }}>
            <Link to="/blog" style={{ color: "var(--frenchGrey)" }}>
              All Posts
            </Link>
          </p>
          <p className="mobileMenu" style={{ width: "100%" }}>
            <Link to="/tags" style={{ color: "var(--frenchGrey)" }}>
              All Tags
            </Link>
          </p>
        </div>
      ) : null}
    </div>
  );
}
