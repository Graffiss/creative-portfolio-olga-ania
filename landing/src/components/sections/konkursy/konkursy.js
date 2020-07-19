import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../../layout"
import styled from "styled-components"
import metafenVideo from "../../../videos/konkursy/5slajd_metafen.mp4"
import KonkursyContent from "./konkursy-content"

const CenterWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;

  h1 {
    text-align: center;
  }
`

const Wrapper = styled.div`
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`

const Header1 = styled.h1`
  color: ${({ theme }) => theme.color.text.primary};
  font-size: 36px;
  margin: 30px 0;
  text-align: left;
`

const Video = styled.video`
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 70vh;
`

const Image = styled.img`
  max-height: 95vh;
  max-width: 1527px;
  background-color: transparent;
`

const KonkursyPhotos = () => {
  const data = useStaticQuery(graphql`
    {
      wedel: file(name: { eq: "4slajd_wedel_konkursy" }) {
        childImageSharp {
          fluid(maxWidth: 3000, quality: 90) {
            src
            srcSet
            sizes
          }
        }
      }
      contest1: file(name: { eq: "7slajd_bułka_konkursy" }) {
        childImageSharp {
          fluid(maxWidth: 1527, quality: 100) {
            src
            srcSet
            sizes
          }
        }
      }
      contest2: file(name: { eq: "8slajd_cola_konkursy" }) {
        childImageSharp {
          fluid(maxWidth: 1527, quality: 100) {
            src
            srcSet
            sizes
          }
        }
      }
      contest3: file(name: { eq: "9slajd_genderless_konkursy" }) {
        childImageSharp {
          fluid(maxWidth: 1527, quality: 100) {
            src
            srcSet
            sizes
          }
        }
      }
      contest4: file(name: { eq: "10slajd_apka_konkursy" }) {
        childImageSharp {
          fluid(maxWidth: 1527, quality: 100) {
            src
            srcSet
            sizes
          }
        }
      }
      contest5: file(name: { eq: "11slajd_sąsiedzi_konkursy" }) {
        childImageSharp {
          fluid(maxWidth: 1527, quality: 100) {
            src
            srcSet
            sizes
          }
        }
      }
      contest6: file(name: { eq: "12slajd_bus_konkursy" }) {
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
      <KonkursyContent />
      <Layout>
        <CenterWrapper>
          <Image
            src={data.wedel.childImageSharp.fluid.src}
            srcSet={data.wedel.childImageSharp.fluid.srcSet}
            sizes={data.wedel.childImageSharp.fluid.sizes}
          />
        </CenterWrapper>
      </Layout>
      <Layout>
        <Wrapper>
          <Header1>Cannes Lions YC - Metafen</Header1>
          <Video controls poster>
            <source src={metafenVideo} />
          </Video>
          <Header1>
            Nasze najmłodsze konkursowe dziecko
            <br />
            Zrobione praktycznie w jeden dzień, z wielkim funem i dumą z efektu!
          </Header1>
        </Wrapper>
      </Layout>
      <Layout>
        <CenterWrapper>
          <h1>Nasze pomysły na Cannes Lions</h1>
        </CenterWrapper>
      </Layout>
      <Layout>
        <CenterWrapper>
          <Image
            src={data.contest1.childImageSharp.fluid.src}
            srcSet={data.contest1.childImageSharp.fluid.srcSet}
            sizes={data.contest1.childImageSharp.fluid.sizes}
          />
        </CenterWrapper>
      </Layout>
      <Layout>
        <CenterWrapper>
          <Image
            src={data.contest2.childImageSharp.fluid.src}
            srcSet={data.contest2.childImageSharp.fluid.srcSet}
            sizes={data.contest2.childImageSharp.fluid.sizes}
          />
        </CenterWrapper>
      </Layout>
      <Layout>
        <CenterWrapper>
          <Image
            src={data.contest3.childImageSharp.fluid.src}
            srcSet={data.contest3.childImageSharp.fluid.srcSet}
            sizes={data.contest3.childImageSharp.fluid.sizes}
          />
        </CenterWrapper>
      </Layout>
      <Layout>
        <CenterWrapper>
          <Image
            src={data.contest4.childImageSharp.fluid.src}
            srcSet={data.contest4.childImageSharp.fluid.srcSet}
            sizes={data.contest4.childImageSharp.fluid.sizes}
          />
        </CenterWrapper>
      </Layout>
      <Layout>
        <CenterWrapper>
          <Image
            src={data.contest5.childImageSharp.fluid.src}
            srcSet={data.contest5.childImageSharp.fluid.srcSet}
            sizes={data.contest5.childImageSharp.fluid.sizes}
          />
        </CenterWrapper>
      </Layout>
      <Layout>
        <CenterWrapper>
          <Image
            src={data.contest6.childImageSharp.fluid.src}
            srcSet={data.contest6.childImageSharp.fluid.srcSet}
            sizes={data.contest6.childImageSharp.fluid.sizes}
          />
        </CenterWrapper>
      </Layout>
    </>
  )
}

export default KonkursyPhotos
