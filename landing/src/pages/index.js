import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Image from "../components/image"
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
  margin-bottom: 20px;
  width: 30vw;
`

const Span = styled.span`
  font-size: 24px;
  border-right: 1px solid black;
  padding-right: 10px;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header1>Here we are</Header1>
    <Image />
    <h2>Rozwiazania kreatywne to nasza pasja.</h2>
    <LinkSection>
      <Span>01</Span>
      <Link to="/o-nas/">O nas</Link>
    </LinkSection>
    <LinkSection>
      <Span>02</Span>
      <Link to="/vichy/">Vichy</Link>
    </LinkSection>
  </Layout>
)

export default IndexPage
