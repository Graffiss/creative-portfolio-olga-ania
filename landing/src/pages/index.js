import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Header1 = styled.h1`
  font-size: 76px;
  text-align: center;
  font-weight: 900;

  span {
    font-family: "Playfair Display";
    font-size: 126px;
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
    font-family: "Playfair Display";
    font-weight: italic;

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

const Links = styled(Link)`
  font-size: 40px;
  font-weight: 300;
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
        <Links to="/loreal/">L'OREAL PARIS</Links>
        <Links to="/inni-klienci/">INNI KLIENCI</Links>
        <Links to="/konkursy/">KONKURSY</Links>
      </LinkSection>
    </Wrapper>
  </Layout>
)

export default IndexPage
