/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Header from "./header/Header"
import Footer from "./footer/Footer"
import GlobalStyle from "./globalStyle";

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;

  main {
    flex: 1 0 auto;
  }

  footer {
    flex-shrink: 0;
  }
  `;


const Layout = ({ children, displayHeader = true }) => {
  return (
    <StyledLayout>
      <GlobalStyle theme="purple" />

      {displayHeader && (
        <Header />
      )}

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
