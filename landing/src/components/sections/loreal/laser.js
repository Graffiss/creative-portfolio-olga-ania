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

const Laser = () => {
  const data = useStaticQuery(graphql`
    {
      laser1: file(name: { eq: "3slajd_laser" }) {
        childImageSharp {
          fluid(maxWidth: 1527, quality: 100) {
            src
            srcSet
            sizes
          }
        }
      }
      laser2: file(name: { eq: "4slajd_laser" }) {
        childImageSharp {
          fluid(maxWidth: 1527, quality: 100) {
            src
            srcSet
            sizes
          }
        }
      }
      laser3: file(name: { eq: "5slajd_laser" }) {
        childImageSharp {
          fluid(maxWidth: 1527, quality: 100) {
            src
            srcSet
            sizes
          }
        }
      }
      laser4: file(name: { eq: "6slajd_laser" }) {
        childImageSharp {
          fluid(maxWidth: 1527, quality: 100) {
            src
            srcSet
            sizes
          }
        }
      }
      laser5: file(name: { eq: "7slajd_laser" }) {
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
            src={data.laser1.childImageSharp.fluid.src}
            srcSet={data.laser1.childImageSharp.fluid.srcSet}
            sizes={data.laser1.childImageSharp.fluid.sizes}
          />
        </CenterWrapper>
      </Layout>
      <Layout>
        <CenterWrapper>
          <Image
            src={data.laser2.childImageSharp.fluid.src}
            srcSet={data.laser2.childImageSharp.fluid.srcSet}
            sizes={data.laser2.childImageSharp.fluid.sizes}
          />
        </CenterWrapper>
      </Layout>
      <Layout>
        <CenterWrapper>
          <Image
            src={data.laser3.childImageSharp.fluid.src}
            srcSet={data.laser3.childImageSharp.fluid.srcSet}
            sizes={data.laser3.childImageSharp.fluid.sizes}
          />
        </CenterWrapper>
      </Layout>
      <Layout>
        <CenterWrapper>
          <Image
            src={data.laser4.childImageSharp.fluid.src}
            srcSet={data.laser4.childImageSharp.fluid.srcSet}
            sizes={data.laser4.childImageSharp.fluid.sizes}
          />
        </CenterWrapper>
      </Layout>
      <Layout>
        <CenterWrapper>
          <Image
            src={data.laser5.childImageSharp.fluid.src}
            srcSet={data.laser5.childImageSharp.fluid.srcSet}
            sizes={data.laser5.childImageSharp.fluid.sizes}
          />
        </CenterWrapper>
      </Layout>
    </>
  )
}

export default Laser
