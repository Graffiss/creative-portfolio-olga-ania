import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../../layout"
import styled from "styled-components"

const CenterWrapper = styled.div`
  min-width: 100vw;
  max-width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
`

const Image = styled.img`
  max-width: 1527px;
`

const Mineral89 = () => {
  const data = useStaticQuery(graphql`
    {
      mineral89main: file(name: { eq: "Mineral_3slajd" }) {
        childImageSharp {
          fluid(maxWidth: 1527, quality: 100) {
            src
            srcSet
            sizes
          }
        }
      }
      mineral89secondary: file(name: { eq: "Mineral_4slajd" }) {
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
            src={data.mineral89main.childImageSharp.fluid.src}
            srcSet={data.mineral89main.childImageSharp.fluid.srcSet}
            sizes={data.mineral89main.childImageSharp.fluid.sizes}
          />
        </CenterWrapper>
      </Layout>
      <Layout>
        <CenterWrapper>
          <Image
            src={data.mineral89secondary.childImageSharp.fluid.src}
            srcSet={data.mineral89secondary.childImageSharp.fluid.srcSet}
            sizes={data.mineral89secondary.childImageSharp.fluid.sizes}
          />
        </CenterWrapper>
      </Layout>
    </>
  )
}

export default Mineral89
