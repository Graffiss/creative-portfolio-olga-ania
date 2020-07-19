import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../../../layout"

const Wrapper = styled.div`
  min-height: 100vh;
  max-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.text.secondary};
`

const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`

const ImageLeft = styled.img`
  max-height: 80%;
`
const ImageRight = styled.img`
  max-height: 100vh;
`

const ZgodnieZNatura = () => {
  const data = useStaticQuery(graphql`
    {
      left: file(name: { eq: "zgodnie-z-natura-1" }) {
        childImageSharp {
          fluid(maxHeight: 720, quality: 100) {
            src
            srcSet
            sizes
          }
        }
      }
      right: file(name: { eq: "zgodnie-z-natura-2" }) {
        childImageSharp {
          fluid(maxHeight: 720, quality: 100) {
            src
            srcSet
            sizes
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Wrapper>
        <ImageWrapper>
          <ImageLeft
            src={data.left.childImageSharp.fluid.src}
            srcSet={data.left.childImageSharp.fluid.srcSet}
            sizes={data.left.childImageSharp.fluid.sizes}
          />
        </ImageWrapper>
        <ImageWrapper>
          <ImageRight
            src={data.right.childImageSharp.fluid.src}
            srcSet={data.right.childImageSharp.fluid.srcSet}
            sizes={data.right.childImageSharp.fluid.sizes}
          />
        </ImageWrapper>
      </Wrapper>
    </Layout>
  )
}

export default ZgodnieZNatura
