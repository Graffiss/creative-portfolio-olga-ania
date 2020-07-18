import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import IntroVichy from "../components/sections/vichy/intro-vichy"
import Mineral89 from "../components/sections/vichy/mineral89"

const CenterWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
