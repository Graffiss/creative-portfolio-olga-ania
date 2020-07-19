import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../../../layout"

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.color.text.primary};

  a {
    color: white;
    font-size: 16px;
    margin-bottom: 40px;
  }
`

const Behance = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Instagram = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 50%;
`

const Vimeo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Image = styled.img`
  height: 150px;
  width: 150px;
  margin-bottom: 40px;
`

const AniaSocial = () => {
  const data = useStaticQuery(graphql`
    {
      behance: file(name: { eq: "behance" }) {
        childImageSharp {
          fluid(maxWidth: 200, quality: 90) {
            src
            srcSet
            sizes
          }
        }
      }
      instagram: file(name: { eq: "instagram" }) {
        childImageSharp {
          fluid(maxWidth: 200, quality: 90) {
            src
            srcSet
            sizes
          }
        }
      }
      vimeo: file(name: { eq: "vimeo" }) {
        childImageSharp {
          fluid(maxWidth: 200, quality: 90) {
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
        <Behance>
          <Image
            src={data.behance.childImageSharp.fluid.src}
            srcSet={data.behance.childImageSharp.fluid.srcSet}
            sizes={data.behance.childImageSharp.fluid.sizes}
          />
          <a
            href="https://www.behance.net/annagudvindesign"
            target="_blank"
            rel="noreferrer"
          >
            https://www.behance.net/annagudvindesign
          </a>
        </Behance>
        <Instagram>
          <Image
            src={data.instagram.childImageSharp.fluid.src}
            srcSet={data.instagram.childImageSharp.fluid.srcSet}
            sizes={data.instagram.childImageSharp.fluid.sizes}
          />
          <a
            href="https://www.instagram.com/women_in_design_team/"
            target="_blank"
            rel="noreferrer"
          >
            https://www.instagram.com/women_in_design_team/
          </a>
          <a
            href="https://www.instagram.com/annagudvin/"
            target="_blank"
            rel="noreferrer"
          >
            https://www.instagram.com/annagudvin/
          </a>
        </Instagram>
        <Vimeo>
          <Image
            src={data.vimeo.childImageSharp.fluid.src}
            srcSet={data.vimeo.childImageSharp.fluid.srcSet}
            sizes={data.vimeo.childImageSharp.fluid.sizes}
          />
          <a
            href="https://vimeo.com/user37255489"
            target="_blank"
            rel="noreferrer"
          >
            https://vimeo.com/user37255489
          </a>
        </Vimeo>
      </Wrapper>
    </Layout>
  )
}

export default AniaSocial
