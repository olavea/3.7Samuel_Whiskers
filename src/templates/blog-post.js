import React from "react";
import { Link, graphql } from "gatsby";

// import Bio from "../components/bio"
import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm, scale } from "../utils/typography";
import logo from "./neste_side_Kris_norsk_text.png";

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next } = this.props.pageContext;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <SEO title={post.frontmatter.title} description={post.excerpt} />

        <p
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1),
            marginTop: rhythm(-1)
          }}
        />

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0
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
                  src={logo}
                  alt="Geff Logo"
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

// import React from "react";
// import { Link, graphql } from "gatsby";
// import ReactDOM from "react-dom";
// import Swipe from "react-easy-swipe";

// // import Bio from "../components/bio"
// import Layout from "../components/layout";
// import SEO from "../components/seo";
// import { rhythm, scale } from "../utils/typography";
// import logo from "./uniparrot4.png";

// class BlogPostTemplate extends React.Component {
//   onSwipeStart(event) {
//     console.log("Start swiping...", event);
//   }

//   onSwipeMove(position, event) {
//     console.log(`Moved ${position.x} pixels horizontally`, event);
//     console.log(`Moved ${position.y} pixels vertically`, event);
//   }

//   onSwipeEnd(event) {
//     console.log("End swiping...", event);
//   }

//   render() {
//     const post = this.props.data.markdownRemark;
//     const siteTitle = this.props.data.site.siteMetadata.title;
//     const { previous, next } = this.props.pageContext;

//     return (
//       <Swipe
//         onSwipeStart={this.onSwipeStart}
//         onSwipeMove={this.onSwipeMove}
//         onSwipeEnd={this.onSwipeEnd}>
//           <Link to={next.fields.slug} />
//       </Swipe>
//       <Layout location={this.props.location} title={siteTitle}>
//         <SEO title={post.frontmatter.title} description={post.excerpt} />

//         <p
//           style={{
//             ...scale(-1 / 5),
//             display: `block`,
//             marginBottom: rhythm(1),
//             marginTop: rhythm(-1)
//           }}
//         />

//         <ul
//           style={{
//             display: `flex`,
//             flexWrap: `wrap`,
//             justifyContent: `space-between`,
//             listStyle: `none`,
//             padding: 0
//           }}
//         >
//           <li>
//             {previous && (
//               <Link to={previous.fields.slug} rel="prev">
//                 ← {previous.frontmatter.title}
//               </Link>
//             )}
//           </li>
//           <li>
//             {next && (
//               <Link to={next.fields.slug} rel="next">
//                 <img
//                   style={{
//                     width: "133px"
//                   }}
//                   src={logo}
//                   alt="Geff Logo"
//                 />
//               </Link>
//             )}
//           </li>
//         </ul>
//         <div dangerouslySetInnerHTML={{ __html: post.html }} />
//         <hr
//           style={{
//             marginBottom: rhythm(1)
//           }}
//         />
//       </Layout>
//     );
//   }
// }

// export default BlogPostTemplate;

// export const pageQuery = graphql`
//   query BlogPostBySlug($slug: String!) {
//     site {
//       siteMetadata {
//         title
//         author
//       }
//     }
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       id
//       excerpt(pruneLength: 160)
//       html
//       frontmatter {
//         title
//         date(formatString: "MMMM DD, YYYY")
//       }
//     }
//   }
// `;

// .
// import React from "react";
// import { Link, graphql } from "gatsby";
// import ReactDOM from "react-dom";
// import Swipe from "react-easy-swipe";

// // import Bio from "../components/bio"
// import Layout from "../components/layout";
// import SEO from "../components/seo";
// import { rhythm, scale } from "../utils/typography";
// import logo from "./uniparrot4.png";

// class BlogPostTemplate extends React.Component {
//   onSwipeStart(event) {
//     console.log("Start swiping...", event);
//   }

//   onSwipeMove(position, event) {
//     console.log(`Moved ${position.x} pixels horizontally`, event);
//     console.log(`Moved ${position.y} pixels vertically`, event);
//   }

//   onSwipeEnd(event) {
//     console.log("End swiping...", event);
//   }

//   render() {
//     const post = this.props.data.markdownRemark;
//     const siteTitle = this.props.data.site.siteMetadata.title;
//     const { previous, next } = this.props.pageContext;

//     return (
//       <Swipe
//         onSwipeStart={this.onSwipeStart}
//         onSwipeMove={this.onSwipeMove}
//         onSwipeEnd={this.onSwipeEnd}>
//           <Link to={next.fields.slug} />
//       </Swipe>
//       <Layout location={this.props.location} title={siteTitle}>
//         <SEO title={post.frontmatter.title} description={post.excerpt} />

//         <p
//           style={{
//             ...scale(-1 / 5),
//             display: `block`,
//             marginBottom: rhythm(1),
//             marginTop: rhythm(-1)
//           }}
//         />

//         <ul
//           style={{
//             display: `flex`,
//             flexWrap: `wrap`,
//             justifyContent: `space-between`,
//             listStyle: `none`,
//             padding: 0
//           }}
//         >
//           <li>
//             {previous && (
//               <Link to={previous.fields.slug} rel="prev">
//                 ← {previous.frontmatter.title}
//               </Link>
//             )}
//           </li>
//           <li>
//             {next && (
//               <Link to={next.fields.slug} rel="next">
//                 <img
//                   style={{
//                     width: "133px"
//                   }}
//                   src={logo}
//                   alt="Geff Logo"
//                 />
//               </Link>
//             )}
//           </li>
//         </ul>
//         <div dangerouslySetInnerHTML={{ __html: post.html }} />
//         <hr
//           style={{
//             marginBottom: rhythm(1)
//           }}
//         />
//       </Layout>
//     );
//   }
// }

// export default BlogPostTemplate;

// export const pageQuery = graphql`
//   query BlogPostBySlug($slug: String!) {
//     site {
//       siteMetadata {
//         title
//         author
//       }
//     }
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       id
//       excerpt(pruneLength: 160)
//       html
//       frontmatter {
//         title
//         date(formatString: "MMMM DD, YYYY")
//       }
//     }
//   }
// `;
