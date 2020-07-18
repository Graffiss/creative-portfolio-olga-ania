import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Header1 = styled.h1`
  font-size: 64px;
  text-align: center;
  font-weight: 700;

  span {
    font-family: "Tinos";
    font-size: 100px;
    font-weight: 300;
    font-style: italic;
  }
`
const Wrapper = styled.div`
  display: flex;
`

const IntroSection = styled.div`
  height: 100vh;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.color.text.primary};
  color: ${({ theme }) => theme.color.text.secondary};
  padding: 30px 0;

  p {
    font-size: 15px;
    font-weight: 300;

    span {
      border-left: 1px solid ${({ theme }) => theme.color.text.secondary};
      border-right: 1px solid ${({ theme }) => theme.color.text.secondary};
      padding: 0 10px;
    }
  }
`
const LinkSection = styled.div`
  flex: 1;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30vw;
`

const Span = styled.span`
  font-size: 24px;
  border-right: 1px solid black;
  padding-right: 10px;
`

const Links = styled(Link)`
  font-size: 40px;
  padding-bottom: 20px;
  color: inherit;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Wrapper>
      <IntroSection>
        <p>
          Najbardziej zgrany team w tej branży! Praca to nasza przyjemność, brak
          budżetu to nie przeszkoda, a kreatywne rozwiązania to nasz chlep
          powszedni.
        </p>
        <Header1>
          CREATIVE TEAM
          <br />
          <span>Olga & Anna</span>
        </Header1>
        <p>
          olgaandania@gmail.com <span>Ania kom: 664 326 780</span> Olga kom: 660
          912 905
        </p>
      </IntroSection>
      <LinkSection>
        <Links to="/o-nas/">O nas</Links>
        <p>Nasze portfolio:</p>
        <Links to="/vichy/">VICHY</Links>
        <Links to="/vichy/">L'OREAL PARIS</Links>
        <Links to="/vichy/">INNI KLIENCI</Links>
        <Links to="/vichy/">KONKURSY</Links>
      </LinkSection>
    </Wrapper>
  </Layout>
)

export default IndexPage
