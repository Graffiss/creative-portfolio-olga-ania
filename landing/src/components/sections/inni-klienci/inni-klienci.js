import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../../layout"
import styled from "styled-components"

const CenterWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
`

const Image = styled.img`
  max-width: 1527px;
  background-color: transparent;
`

const InniKlienciPhotos = () => {
  const data = useStaticQuery(graphql`
    {
      artboard1: file(name: { eq: "Artboard-1-copy-2" }) {
        childImageSharp {
          fluid(maxWidth: 1527, quality: 100) {
            src
            srcSet
            sizes
          }
        }
      }
      artboard2: file(name: { eq: "Artboard-1-copy-3" }) {
        childImageSharp {
          fluid(maxWidth: 1527, quality: 100) {
            src
            srcSet
            sizes
          }
        }
      }
      artboard3: file(name: { eq: "Artboard-1" }) {
        childImageSharp {
          fluid(maxWidth: 1527, quality: 100) {
            src
            srcSet
            sizes
          }
        }
      }
      artboard4: file(name: { eq: "Artboard-1-copy" }) {
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
            src={data.artboard1.childImageSharp.fluid.src}
            srcSet={data.artboard1.childImageSharp.fluid.srcSet}
            sizes={data.artboard1.childImageSharp.fluid.sizes}
          />
        </CenterWrapper>
      </Layout>
      <Layout>
        <CenterWrapper>
          <Image
            src={data.artboard2.childImageSharp.fluid.src}
            srcSet={data.artboard2.childImageSharp.fluid.srcSet}
            sizes={data.artboard2.childImageSharp.fluid.sizes}
          />
        </CenterWrapper>
      </Layout>
      <Layout>
        <CenterWrapper>
          <Image
            src={data.artboard3.childImageSharp.fluid.src}
            srcSet={data.artboard3.childImageSharp.fluid.srcSet}
            sizes={data.artboard3.childImageSharp.fluid.sizes}
          />
        </CenterWrapper>
      </Layout>
      <Layout>
        <CenterWrapper>
          <Image
            src={data.artboard4.childImageSharp.fluid.src}
            srcSet={data.artboard4.childImageSharp.fluid.srcSet}
            sizes={data.artboard4.childImageSharp.fluid.sizes}
          />
        </CenterWrapper>
      </Layout>
    </>
  )
}

export default InniKlienciPhotos
