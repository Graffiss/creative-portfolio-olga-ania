import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Header1 = styled.h1`
  padding: 25px 0;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  font-size: 40px;
  line-height: 48px;
  width: 30vw;
  margin: 20px 10px;
`

const LinkSection = styled.div`
  border-top: 1px solid black;
  padding-top: 25px;
  margin-top: 20px;
  width: 30vw;

  a {
    text-decoration: none;
  }
`

const Span = styled.span`
  font-size: 24px;
  border-right: 1px solid black;
  padding-right: 10px;
`
const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ImageWrapper = styled.img`
  max-height: 50vh;
`

const Links = styled(Link)`
  font-size: 40px;
  padding-left: 20px;
  color: inherit;
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Header1>Here we are</Header1>
    <MainContent>
      <ImageWrapper
        src={data.file.childImageSharp.fluid.src}
        srcSet={data.file.childImageSharp.fluid.srcSet}
        sizes={data.file.childImageSharp.fluid.sizes}
      />
      <h2>Rozwiazania kreatywne to nasza pasja.</h2>
      <LinkSection>
        <Span>01</Span>
        <Links to="/o-nas/">O nas</Links>
      </LinkSection>
      <LinkSection>
        <Span>02</Span>
        <Links to="/vichy/">Vichy</Links>
      </LinkSection>
    </MainContent>
  </Layout>
)

export const query = graphql`
  {
    file(name: { eq: "main" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          src
          srcSet
          sizes
        }
      }
    }
  }
`

export default IndexPage
