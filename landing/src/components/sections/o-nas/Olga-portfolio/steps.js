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
  align-items: center;
`

const ImageLeft = styled.img`
  max-height: 500px;
  max-width: 50vw;
`
const ImageRight = styled.img`
  max-height: 700px;
  max-width: 50vw;
`

const Steps = () => {
  const data = useStaticQuery(graphql`
    {
      left: file(name: { eq: "left-steps" }) {
        childImageSharp {
          fluid(maxHeight: 500, quality: 100) {
            src
            srcSet
            sizes
          }
        }
      }
      right: file(name: { eq: "right-steps" }) {
        childImageSharp {
          fluid(maxHeight: 700, quality: 100) {
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

export default Steps
