import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import OurTeam from "../components/sections/our-team/our-team"
import Ania from "../components/sections/Ania/ania"
import Olga from "../components/sections/Olga/olga"
import AniaPortfolio from "../components/sections/Ania-portfolio/ania-portfolio"
import AniaSocial from "../components/sections/Ania-social/ania-social"
import OlgaPortfolio from "../components/sections/Olga-portfolio/olga-portfolio"
import Maybelline1 from "../components/sections/Olga-portfolio/maybelline1"
import Maybelline2 from "../components/sections/Olga-portfolio/maybelline2"
import Loreal from "../components/sections/Olga-portfolio/loreal"
import ZgodnieZNatura from "../components/sections/Olga-portfolio/zgodnie-z-natura"

const CenterWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Header1 = styled.h1`
  font-size: 90px;
  text-align: center;

  span {
    font-family: "Tinos";
  }
`

const About = () => (
  <>
    <Layout>
      <CenterWrapper>
        <Header1>
          Olga & Anna
          <br />
          <span>- team doskonały</span>
        </Header1>
        <h3>poznaj nas!</h3>
      </CenterWrapper>
    </Layout>
    <OurTeam />
    <Ania />
    <AniaPortfolio />
    <AniaSocial />
    <Olga />
    <OlgaPortfolio />
    <Maybelline1 />
    <Maybelline2 />
    <Loreal />
    <ZgodnieZNatura />
  </>
)

export default About
