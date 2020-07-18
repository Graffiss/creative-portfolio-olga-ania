import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../../../layout"

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.text.primary};
`

const Image = styled.img`
  height: 100vh;
`

const Maybelline1 = () => {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "maybelline1" }) {
        childImageSharp {
          fluid(maxHeight: 1100, quality: 100) {
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
        <Image
          src={data.file.childImageSharp.fluid.src}
          srcSet={data.file.childImageSharp.fluid.srcSet}
          sizes={data.file.childImageSharp.fluid.sizes}
        />
      </Wrapper>
    </Layout>
  )
}

export default Maybelline1
