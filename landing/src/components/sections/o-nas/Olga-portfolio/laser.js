import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../../../layout"

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.text.primary};
`

const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ImageLeftTop = styled.img`
  max-height: 606px;
  margin-bottom: 20px;
`

const ImageLeftBottom = styled.img`
  max-height: 595px;
  margin-top: 20px;
`
const ImageRight = styled.img`
  max-height: 90vh;
`

const Laser = () => {
  const data = useStaticQuery(graphql`
    {
      leftTop: file(name: { eq: "laser-left-top" }) {
        childImageSharp {
          fluid(maxWidth: 606, quality: 100) {
            src
            srcSet
            sizes
          }
        }
      }
      leftBottom: file(name: { eq: "laser-left-bottom" }) {
        childImageSharp {
          fluid(maxWidth: 595, quality: 100) {
            src
            srcSet
            sizes
          }
        }
      }
      right: file(name: { eq: "laser-right" }) {
        childImageSharp {
          fluid(maxHeight: 938, quality: 100) {
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
          <ImageLeftTop
            src={data.leftTop.childImageSharp.fluid.src}
            srcSet={data.leftTop.childImageSharp.fluid.srcSet}
            sizes={data.leftTop.childImageSharp.fluid.sizes}
          />
          <ImageLeftBottom
            src={data.leftBottom.childImageSharp.fluid.src}
            srcSet={data.leftBottom.childImageSharp.fluid.srcSet}
            sizes={data.leftBottom.childImageSharp.fluid.sizes}
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

export default Laser
