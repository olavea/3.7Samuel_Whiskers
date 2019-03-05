import React from "react";
import AddKidsToyAnimalForm from "../components/AddKidsToyAnimalForm";

import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import { rhythm } from "../utils/typography";

class BlogIndex extends React.Component {
  state = {
    toyAnimals: {}
  };
  addToyAnimal = toyAnimal => {
    // 1. Take a copy of the existing state
    const toyAnimals = { ...this.state.toyAnimals };
    // 2. Add our new toyAnimal to that toyAnimals variable
    toyAnimals[`toyAnimal${Date.now()}`] = toyAnimal;
    // 3. Set the new fishes object to state. WTHeck?
    this.setState({ toyAnimals });

    console.log("adding a toy animal");
  };
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return (
      <>
        <Layout location={this.props.location} title={siteTitle}>
          <div>
            <ul
              style={{
                display: `flex`,
                flexWrap: `wrap`,
                justifyContent: `space-between`,
                listStyle: `none`,
                padding: 0
              }}
            >
              <li>{<Link to="/" rel="prev" />}</li>
              <li>
                {
                  <Link to="/1/1/" rel="next">
                    1 →
                  </Link>
                }
              </li>
            </ul>

            <div
              style={{
                maxWidth: `900px`,
                padding: `0px`,
                marginBottom: `0.33rem`
              }}
            >
              <Image />
            </div>

            <AddKidsToyAnimalForm addToyAnimal={this.addToyAnimal} />

            <SEO
              title="All posts"
              keywords={[`blog`, `gatsby`, `javascript`, `react`]}
            />

            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug;
              return (
                <div>
                  <div>
                    <div key={node.fields.slug}>
                      <h3
                        style={{
                          marginBottom: rhythm(1 / 4)
                        }}
                      >
                        <Link
                          style={{ boxShadow: `none` }}
                          to={node.fields.slug}
                        >
                          {title}
                        </Link>
                      </h3>
                      <small>{node.frontmatter.date}</small>
                      <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Layout>
      </>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: ASC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;

// on the top, put in a fast svg fluid image of book cover
