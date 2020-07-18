import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../../layout"

const Wrapper = styled.div`
  height: 100vh;
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
  height: 720px;
`
const ImageRight = styled.img`
  height: 100vh;
`

const ZgodnieZNatura = () => {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "zgodnie-z-natura-1" }) {
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
            src={data.file.childImageSharp.fluid.src}
            srcSet={data.file.childImageSharp.fluid.srcSet}
            sizes={data.file.childImageSharp.fluid.sizes}
          />
        </ImageWrapper>
        <ImageWrapper>
          <ImageRight
            src={data.file.childImageSharp.fluid.src}
            srcSet={data.file.childImageSharp.fluid.srcSet}
            sizes={data.file.childImageSharp.fluid.sizes}
          />
        </ImageWrapper>
      </Wrapper>
    </Layout>
  )
}

export default ZgodnieZNatura
