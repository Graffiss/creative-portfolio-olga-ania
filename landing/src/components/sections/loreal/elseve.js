import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../../layout"
import styled from "styled-components"
import elseveVideo from "../../../videos/loreal/9-slajd_video_góra.mp4"

const CenterWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
`

const GridWrapper = styled.div`
  display: flex;
  max-width: 100vw;
`

const GridColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const Image = styled.img`
  max-width: 33vw;
  max-height: 100vh;
  background-color: transparent;
`

const Video = styled.video`
  max-width: 30vw;
`

const MainImage = styled.img`
  max-height: 90vh;
`

const Elseve = () => {
  const data = useStaticQuery(graphql`
    {
      elseveLeft: file(name: { eq: "9_slajd_elseve" }) {
        childImageSharp {
          fluid(maxWidth: 1527, quality: 100) {
            src
            srcSet
            sizes
          }
        }
      }
      elseveBottom: file(name: { eq: "9-slajd_dolna_kolumna" }) {
        childImageSharp {
          fluid(maxWidth: 1527, quality: 100) {
            src
            srcSet
            sizes
          }
        }
      }
      elseveRight: file(name: { eq: "9-slajd_prawa_kolumna" }) {
        childImageSharp {
          fluid(maxWidth: 1527, quality: 100) {
            src
            srcSet
            sizes
          }
        }
      }
      slajd10: file(name: { eq: "10slajd" }) {
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
          <h2>HAIRCARE</h2>
        </CenterWrapper>
      </Layout>
      <Layout>
        <CenterWrapper>
          <GridWrapper>
            <GridColumn>
              <Image
                src={data.elseveLeft.childImageSharp.fluid.src}
                srcSet={data.elseveLeft.childImageSharp.fluid.srcSet}
                sizes={data.elseveLeft.childImageSharp.fluid.sizes}
              />
            </GridColumn>
            <GridColumn>
              <Video controls poster>
                <source src={elseveVideo} />
              </Video>
              <Image
                src={data.elseveBottom.childImageSharp.fluid.src}
                srcSet={data.elseveBottom.childImageSharp.fluid.srcSet}
                sizes={data.elseveBottom.childImageSharp.fluid.sizes}
              />
            </GridColumn>
            <GridColumn>
              <Image
                src={data.elseveRight.childImageSharp.fluid.src}
                srcSet={data.elseveRight.childImageSharp.fluid.srcSet}
                sizes={data.elseveRight.childImageSharp.fluid.sizes}
              />
            </GridColumn>
          </GridWrapper>
        </CenterWrapper>
      </Layout>

      <Layout>
        <CenterWrapper>
          <MainImage
            src={data.slajd10.childImageSharp.fluid.src}
            srcSet={data.slajd10.childImageSharp.fluid.srcSet}
            sizes={data.slajd10.childImageSharp.fluid.sizes}
          />
        </CenterWrapper>
      </Layout>
    </>
  )
}

export default Elseve
