import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import IntroLoreal from "../components/sections/loreal/intro-loreal"
import Laser from "../components/sections/loreal/laser"
import Elseve from "../components/sections/loreal/elseve"
import Botanical from "../components/sections/loreal/botanical"

const CenterWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
`

const Loreal = () => (
  <>
    <Layout>
      <CenterWrapper>
        <h1>L’Oréal Paris</h1>
      </CenterWrapper>
    </Layout>
    <IntroLoreal />
    <Laser />
    <Elseve />
    <Botanical />
  </>
)

export default Loreal
