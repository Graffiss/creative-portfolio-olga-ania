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

    @media (max-width: 1450px) {
      font-size: 100px;
    }

    @media (max-width: 1150px) {
      font-size: 70px;
    }
  }

  @media (max-width: 1450px) {
    font-size: 60px;
  }

  @media (max-width: 1150px) {
    font-size: 45px;
  }
`
const Wrapper = styled.div`
  display: flex;

  @media (max-width: 800px) {
    display: none;
  }
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
    width: 80%;
    text-align: center;

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

  p {
    font-size: 40px;
    font-weight: 300;
    padding-bottom: 20px;

    @media (max-width: 1450px) {
      font-size: 32px;
    }

    @media (max-width: 1150px) {
      font-size: 24px;
    }
  }
`

const Links = styled(Link)`
  font-size: 40px;
  font-weight: 300;
  padding-bottom: 20px;
  color: inherit;

  @media (max-width: 1450px) {
    font-size: 32px;
  }

  @media (max-width: 1150px) {
    font-size: 24px;
  }
`

const MobileWrapper = styled.div`
  @media (min-width: 800px) {
    display: none;
  }

  h1 {
    font-size: 15px;
    margin: 10%;
  }
`

const Footer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  span {
    font-size: 15px;
    font-family: "Playfair Display";
    font-weight: italic;
    text-align: center;
    padding: 0 10px;

    &.middle {
      border-left: 1px solid ${({ theme }) => theme.color.text.secondary};
      border-right: 1px solid ${({ theme }) => theme.color.text.secondary};
      padding: 0 10px;
    }
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MobileWrapper>
      <h1>
        Portfolio nie dostępne w wersji mobilnej. Użyj komputera, aby zobaczyć
        dzieła stworzone przez Olgę i Anię!
      </h1>
    </MobileWrapper>
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
        <Footer>
          <span>olgaandania@gmail.com</span>
          <span className="middle">Anna Solianyk kom: 664 326 780</span>
          <span>Olga Markiewicz kom: 660 912 905</span>
        </Footer>
      </IntroSection>
      <LinkSection>
        <Links to="/o-nas/">O nas</Links>
        <p>Nasze portfolio:</p>
        <Links to="/vichy/">VICHY</Links>
        <Links to="/loreal/">{"L'Oréal".toUpperCase()} PARIS</Links>
        <Links to="/inni-klienci/">INNI KLIENCI</Links>
        <Links to="/konkursy/">KONKURSY</Links>
      </LinkSection>
    </Wrapper>
  </Layout>
)

export default IndexPage
