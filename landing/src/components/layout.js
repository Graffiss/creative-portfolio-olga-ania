import React from "react"
import PropTypes from "prop-types"
import styled, { ThemeProvider } from "styled-components"
import theme from "../theme/theme"
import GlobalStyle from "../theme/GlobalStyle"

const ContentWrapper = styled.div`
  max-height: 100vh;
  width: 100vw;
`

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ContentWrapper>
        <main>{children}</main>
      </ContentWrapper>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
