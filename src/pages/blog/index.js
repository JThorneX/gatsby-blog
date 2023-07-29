import * as React from "react";
import Layout from "../../components/layout";
import { Link, graphql } from "gatsby";
import Seo from "../../components/seo";
import "../../styles/posts.css";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="All Blog Posts">
      <div className="postsContainer">
        <div className="postsText">
          {data.allMdx.nodes.map((node) => (
            <article key={node.id}>
              <h2 className="postTitle">
                <Link
                  to={`/blog/${node.frontmatter.slug}`}
                  style={{ textDecoration: "none" }}
                  className="postTitle"
                >
                  {node.frontmatter.title}
                </Link>
              </h2>
              <p className="postDate">Posted: {node.frontmatter.date}</p>
              <p className="postExcerpt">{node.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          tags
          slug
        }
        id
        excerpt(pruneLength: 30)
      }
    }
  }
`;

export const Head = () => <Seo title="My Blog Posts" />;

export default BlogPage;
