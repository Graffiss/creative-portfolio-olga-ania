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
`

const Image = styled.img`
  max-width: 1527px;
`

const LiftActiv = () => {
  const data = useStaticQuery(graphql`
    {
      liftactivMain: file(name: { eq: "Liftactiv_6slajd" }) {
        childImageSharp {
          fluid(maxWidth: 1527, quality: 100) {
            src
            srcSet
            sizes
          }
        }
      }
      liftactivSecondary: file(name: { eq: "Liftactiv_slajd7-1" }) {
        childImageSharp {
          fluid(maxWidth: 1527, quality: 100) {
            src
            srcSet
            sizes
          }
        }
      }
      liftactivTernary: file(name: { eq: "Ampułki_8slajd" }) {
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
            src={data.liftactivMain.childImageSharp.fluid.src}
            srcSet={data.liftactivMain.childImageSharp.fluid.srcSet}
            sizes={data.liftactivMain.childImageSharp.fluid.sizes}
          />
        </CenterWrapper>
      </Layout>
      <Layout>
        <CenterWrapper>
          <Image
            src={data.liftactivSecondary.childImageSharp.fluid.src}
            srcSet={data.liftactivSecondary.childImageSharp.fluid.srcSet}
            sizes={data.liftactivSecondary.childImageSharp.fluid.sizes}
          />
        </CenterWrapper>
      </Layout>
      <Layout>
        <CenterWrapper>
          <Image
            src={data.liftactivTernary.childImageSharp.fluid.src}
            srcSet={data.liftactivTernary.childImageSharp.fluid.srcSet}
            sizes={data.liftactivTernary.childImageSharp.fluid.sizes}
          />
        </CenterWrapper>
      </Layout>
    </>
  )
}

export default LiftActiv
