import React from "react";
import PropTypes from "prop-types";
import "../styles/tags.css";
import { Link, graphql } from "gatsby";

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMdx;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`;

  return (
    <div className="tagsContainer">
      <div className="siteHeader">
        <Link to="/" className="headerText">
          <header className="hText">DID I LEAVE THE STOVE ON</header>
        </Link>
      </div>
      <div className="tagsHeader">
        <p className="taggedText">{tagHeader}</p>
      </div>
      <div className="tagsList">
        <ul>
          {edges.map(({ node }) => {
            const { slug } = node.frontmatter;
            const { title } = node.frontmatter;
            return (
              <li key={slug}>
                <Link to={`/blog/${slug}`}>{title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="tagsAll">
        <Link to="/tags">All tags</Link>
      </div>
      <div className="homeLink">
        <Link to="/">Home</Link>
      </div>
    </div>
  );
};

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
};

export default Tags;

export const pageQuery = graphql`
  query ($tag: String) {
    allMdx(
      limit: 2000
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            slug
            tags
            title
          }
          id
        }
      }
    }
  }
`;
