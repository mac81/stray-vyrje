/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header/Header"
import Footer from "./footer/Footer"
// import "./layout.css"
import GlobalStyle from "./globalStyle";

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;

  main {
    /* max-width: 1280px;
    width: 100%;
    margin: 0 auto; */
    flex: 1 0 auto;
  }

  footer {
    flex-shrink: 0;
  }
  `;


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <StyledLayout>
      <GlobalStyle theme="purple" />

      <Header />

      <main>
        {children}
      </main>

      <Footer />
    </StyledLayout>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
