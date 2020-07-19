import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import IntroVichy from "../components/sections/vichy/intro-vichy"
import Mineral89 from "../components/sections/vichy/mineral89"
import Mineral89Video from "../components/sections/vichy/mineral89video"
import LiftActiv from "../components/sections/vichy/liftactive"
import LiftactivVideo from "../components/sections/vichy/liftactivvideo"
import Normaderm from "../components/sections/vichy/normaderm"
import Neovadiol from "../components/sections/vichy/neovadiol"

const CenterWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
`

const Image = styled.img`
  max-width: 700px;
`

const Vichy = ({ data }) => (
  <>
    <Layout>
      <CenterWrapper>
        <Image
          src={data.file.childImageSharp.fluid.src}
          srcSet={data.file.childImageSharp.fluid.srcSet}
          sizes={data.file.childImageSharp.fluid.sizes}
        />
      </CenterWrapper>
    </Layout>
    <IntroVichy />
    <Mineral89 />
    <Mineral89Video />
    <LiftActiv />
    <LiftactivVideo />
    <Normaderm />
    <Neovadiol />
  </>
)

export const query = graphql`
  {
    file(name: { eq: "1slajd_LOGO" }) {
      childImageSharp {
        fluid(maxWidth: 1200, quality: 100) {
          src
          srcSet
          sizes
        }
      }
    }
  }
`

export default Vichy
