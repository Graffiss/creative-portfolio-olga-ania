import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import OurTeam from "../components/sections/o-nas/our-team/our-team"
import Ania from "../components/sections/o-nas/Ania/ania"
import Olga from "../components/sections/o-nas/Olga/olga"
import AniaPortfolio from "../components/sections/o-nas/Ania-portfolio/ania-portfolio"
import AniaSocial from "../components/sections/o-nas/Ania-social/ania-social"
import OlgaPortfolio from "../components/sections/o-nas/Olga-portfolio/olga-portfolio"
import Maybelline1 from "../components/sections/o-nas/Olga-portfolio/maybelline1"
import Maybelline2 from "../components/sections/o-nas/Olga-portfolio/maybelline2"
import Loreal from "../components/sections/o-nas/Olga-portfolio/loreal"
import ZgodnieZNatura from "../components/sections/o-nas/Olga-portfolio/zgodnie-z-natura"
import Laser from "../components/sections/o-nas/Olga-portfolio/laser"
import RichContent from "../components/sections/o-nas/Olga-portfolio/rich-conent"
import Steps from "../components/sections/o-nas/Olga-portfolio/steps"
import DajSobieSpokoj from "../components/sections/o-nas/Olga-portfolio/daj-sobie-spokoj"

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
    <Laser />
    <RichContent />
    <Steps />
    <DajSobieSpokoj />
  </>
)

export default About
