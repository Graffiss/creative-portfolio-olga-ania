import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../../layout"
import styled from "styled-components"
import neovadiolVideo from "../../../videos/vichy/Neovadiol_16slajd_video.mp4"

const CenterWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Image = styled.img`
  max-width: 1527px;
  background-color: transparent;
`

const Video = styled.video`
  max-height: 100vh;
`

const Neovadiol = () => {
  const data = useStaticQuery(graphql`
    {
      neovadiolMain: file(name: { eq: "Neovadiol_14slajd" }) {
        childImageSharp {
          fluid(maxWidth: 1527, quality: 100) {
            src
            srcSet
            sizes
          }
        }
      }
      neovadiolSecondary: file(name: { eq: "Neovadiol_15slajd" }) {
        childImageSharp {
          fluid(maxWidth: 1527, quality: 100) {
            src
            srcSet
            sizes
          }
        }
      }
    }
  `)

  return (
    <>
      <Layout>
        <CenterWrapper>
          <Image
            src={data.neovadiolMain.childImageSharp.fluid.src}
            srcSet={data.neovadiolMain.childImageSharp.fluid.srcSet}
            sizes={data.neovadiolMain.childImageSharp.fluid.sizes}
          />
        </CenterWrapper>
      </Layout>
      <Layout>
        <CenterWrapper>
          <Image
            src={data.neovadiolSecondary.childImageSharp.fluid.src}
            srcSet={data.neovadiolSecondary.childImageSharp.fluid.srcSet}
            sizes={data.neovadiolSecondary.childImageSharp.fluid.sizes}
          />
        </CenterWrapper>
      </Layout>
      <Layout>
        <CenterWrapper>
          <Video controls autoplay poster>
            <source src={neovadiolVideo} />
          </Video>
        </CenterWrapper>
      </Layout>
    </>
  )
}

export default Neovadiol
