import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm } from "../utils/typography";

import Inventory from "../components/Inventory";
import fishes from "../sample-fishes";
import Fish from "../components/Fish";
import AddLilliansColoringPage from "../components/AddKidsColoringPage";
import buttonBirdyTop from "./Bee_hummingbird_no.4.png";
import buttonBirdyBottom from "./Bee_hummingbird_no.png";

import styled from "styled-components";

const BeeHummingBirdWrapper = styled.div`
  margin-bottom: 0;
  padding-bottom: 0;
  margin-top: 0;
  padding-top: 0;
  img {
    margin-top: 0;
    padding-top: 0;
  }
  a {
    margin-bottom: 0;
    padding-bottom: 0;
    margin-top: 0;
    padding-top: 0;
  }
`;

class BlogPostTemplate extends React.Component {
  state = {
    fargelagteArk: {}
  };

  addColoringPages = iColoredThis => {
    // I. take a copy of coloringPages existing coloringPages
    const fargelagteArk = { ...this.state.fargelagteArk };
    // II. add our new coloringPages to that coloringPages variable
    fargelagteArk[`iColoredThis${Date.now()}`] = fargelagteArk;
    // III. set the new coloringPages object to state
    this.setState({ fargelagteArk });
  };

  loadSampleFishes = () => {
    this.setState({ fargelagteArk: fishes });
  };

  componentDidMount() {
    //I reinstate our localstorage = Wes#19 6:33
  }

  componentDidUpdate() {
    localStorage.setItem(
      this.props.data.markdownRemark.frontmatter.title,
      JSON.stringify(this.state.coloringPages)
    );
  }
  // Jeg vil at key skal være sidetall = Win!

  componentWillUnmount() {}

  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next } = this.props.pageContext;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <BeeHummingBirdWrapper>
          <SEO title={post.frontmatter.title} description={post.excerpt} />

          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
              margin: 0,
              marginBottom: 0,
              paddingBottom: 0
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  <img
                    style={{
                      width: "133px"
                    }}
                    src={buttonBirdyTop}
                    alt="Hummingbird button top"
                  />
                </Link>
              )}
            </li>
          </ul>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <AddLilliansColoringPage addColoringPages={this.addColoringPages} />
          <Inventory
            addColoringPages={this.addColoringPages}
            loadSampleFishes={this.loadSampleFishes}
          />
          <ul className="fishes">
            {Object.keys(this.state.fargelagteArk).map(key => (
              <Fish key={key} />
            ))}
          </ul>

          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
              margin: 0
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  <img
                    style={{
                      width: "333px"
                    }}
                    src={buttonBirdyBottom}
                    alt="Hummingbird button bottom Onward!"
                  />
                </Link>
              )}
            </li>
          </ul>
          <hr
            style={{
              marginBottom: rhythm(1)
            }}
          />
        </BeeHummingBirdWrapper>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
