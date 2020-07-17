import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import OurTeam from "../components/sections/our-team/our-team"

const CenterWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Header1 = styled.h1`
  font-size: 60px;
  text-align: center;
`

const About = () => (
  <>
    <Layout>
      <CenterWrapper>
        <Header1>
          Olga & Anna
          <br />- team doskonały
        </Header1>
        <h3>poznaj nas!</h3>
      </CenterWrapper>
    </Layout>
    <OurTeam />
  </>
)

export default About
