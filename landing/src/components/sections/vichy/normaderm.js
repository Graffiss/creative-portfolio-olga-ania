import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../../layout"
import styled from "styled-components"
import normadermLeft from "../../../videos/vichy/11slajd_1_video.mp4"
import normadermCenter from "../../../videos/vichy/11slajd_2_video_.mp4"
import normadermRight from "../../../videos/vichy/11slajd_3_video.mp4"
import normadermMain from "../../../videos/vichy/Normaderm_13slajd.mp4"

const CenterWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Image = styled.img`
  max-width: 1527px;
`

const TripleVideo = styled.video`
  flex: 1;
  max-height: 100vh;
  max-width: 30vw;
  margin: 0 20px;
`

const Video = styled.video`
  max-height: 100vh;
`

const VideoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 90vw;
`

const Normaderm = () => {
  const data = useStaticQuery(graphql`
    {
      normadermMain: file(name: { eq: "Normaderm_10slajd" }) {
        childImageSharp {
          fluid(maxWidth: 1527, quality: 100) {
            src
            srcSet
            sizes
          }
        }
      }
      normadermSecondary: file(name: { eq: "Normaderm_12slajd" }) {
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
            src={data.normadermMain.childImageSharp.fluid.src}
            srcSet={data.normadermMain.childImageSharp.fluid.srcSet}
            sizes={data.normadermMain.childImageSharp.fluid.sizes}
          />
        </CenterWrapper>
      </Layout>
      <Layout>
        <CenterWrapper>
          <VideoWrapper>
            <TripleVideo controls autoplay poster>
              <source src={normadermLeft} />
            </TripleVideo>
            <TripleVideo controls autoplay poster>
              <source src={normadermCenter} />
            </TripleVideo>
            <TripleVideo controls autoplay poster>
              <source src={normadermRight} />
            </TripleVideo>
          </VideoWrapper>
        </CenterWrapper>
      </Layout>
      <Layout>
        <CenterWrapper>
          <Image
            src={data.normadermSecondary.childImageSharp.fluid.src}
            srcSet={data.normadermSecondary.childImageSharp.fluid.srcSet}
            sizes={data.normadermSecondary.childImageSharp.fluid.sizes}
          />
        </CenterWrapper>
      </Layout>
      <Layout>
        <CenterWrapper>
          <Video controls autoplay poster>
            <source src={normadermMain} />
          </Video>
        </CenterWrapper>
      </Layout>
    </>
  )
}

export default Normaderm
