import React from "react";
import { Link } from "gatsby";

//import { rhythm, scale } from "../utils/typography";
import styled from "styled-components";

const MainLayout = styled.main`
  max-width: 90%;
  margin: 0 auto;
  margin-top: 0;
`;

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    let header;

    if (location.pathname === rootPath) {
      header = (
        <h1>
          <Link to={`/`}>{title}</Link>
        </h1>
      );
    } else {
      header = (
        <h3>
          <Link to={`/`}>{title}</Link>
        </h3>
      );
    }
    return (
      <div>
        <MainLayout>
          <div>{children}</div>
          <footer>
            © {new Date().getFullYear()}, Built by hand at home with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </MainLayout>
      </div>
    );
  }
}

export default Layout;
