import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../../layout"
import styled from "styled-components"
import botanicalMainVideo from "../../../videos/loreal/13slajd_botanicals_video.mp4"
import botanicalLeftVideo from "../../../videos/loreal/11slajd_video_lewo.mp4"

const CenterWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
`

const VideoWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`
const LeftContent = styled.div`
  flex: 1;
`

const RightContent = styled.div`
  flex: 2;

  img {
    max-width: 50vw;
  }
`

const Image = styled.img`
  max-width: 1527px;
  background-color: transparent;
`

const Video = styled.video`
  max-height: 95vh;
`

const Botanical = () => {
  const data = useStaticQuery(graphql`
    {
      botanicalRight: file(name: { eq: "11slajd_prawe_botanicals" }) {
        childImageSharp {
          fluid(maxWidth: 1527, quality: 100) {
            src
            srcSet
            sizes
          }
        }
      }
      botanicalsPrimary: file(name: { eq: "12slajd_botanicals" }) {
        childImageSharp {
          fluid(maxWidth: 1527, quality: 100) {
            src
            srcSet
            sizes
          }
        }
      }
      botanicalsSecondary: file(name: { eq: "14slajd_botanicals" }) {
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
          <VideoWrapper>
            <LeftContent>
              <Video controls poster>
                <source src={botanicalLeftVideo} />
              </Video>
            </LeftContent>
            <RightContent>
              <img
                alt="botanical commercial"
                src={data.botanicalRight.childImageSharp.fluid.src}
                srcSet={data.botanicalRight.childImageSharp.fluid.srcSet}
                sizes={data.botanicalRight.childImageSharp.fluid.sizes}
              />
            </RightContent>
          </VideoWrapper>
        </CenterWrapper>
      </Layout>
      <Layout>
        <CenterWrapper>
          <Image
            src={data.botanicalsPrimary.childImageSharp.fluid.src}
            srcSet={data.botanicalsPrimary.childImageSharp.fluid.srcSet}
            sizes={data.botanicalsPrimary.childImageSharp.fluid.sizes}
          />
        </CenterWrapper>
      </Layout>
      <Layout>
        <CenterWrapper>
          <Video controls poster>
            <source src={botanicalMainVideo} />
          </Video>
        </CenterWrapper>
      </Layout>
      <Layout>
        <CenterWrapper>
          <Image
            src={data.botanicalsSecondary.childImageSharp.fluid.src}
            srcSet={data.botanicalsSecondary.childImageSharp.fluid.srcSet}
            sizes={data.botanicalsSecondary.childImageSharp.fluid.sizes}
          />
        </CenterWrapper>
      </Layout>
    </>
  )
}

export default Botanical
