import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Nie znaleziono" />
    <Wrapper>
      <h1>Hello? Isn't me you're looking for?</h1>
    </Wrapper>
  </Layout>
)

export default NotFoundPage
