import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../../layout"
import styled from "styled-components"

const CenterWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`

const LeftContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

const RightContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const Paragraph = styled.p`
  color: ${({ theme }) => theme.color.text.primary};
  font-size: 36px;
  padding: 0 50px;
  text-align: left;

  @media (max-width: 1450px) {
    font-size: 28px;
  }

  @media (max-width: 1150px) {
    font-size: 20px;
  }

  h4 {
    padding-bottom: 15px;
    @media (max-width: 1450px) {
      font-size: 32px;
    }

    @media (max-width: 1150px) {
      font-size: 24px;
    }
  }
`

const Image = styled.img`
  max-height: 90vh;
  max-width: 80%;
  background-color: transparent;
`

const KonkursyContent = () => {
  const data = useStaticQuery(graphql`
    {
      slovenia: file(name: { eq: "2slajd_slovenia_konkursy" }) {
        childImageSharp {
          fluid(maxWidth: 1527, quality: 100) {
            src
            srcSet
            sizes
          }
        }
      }
      adidas: file(name: { eq: "3lajd_adidas_konkursy" }) {
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
          <LeftContent>
            <Image
              src={data.slovenia.childImageSharp.fluid.src}
              srcSet={data.slovenia.childImageSharp.fluid.srcSet}
              sizes={data.slovenia.childImageSharp.fluid.sizes}
            />
          </LeftContent>
          <RightContent>
            <Paragraph>
              Brief na Young Drummers Competition 2019 był przejrzysty, jak
              słoweńskie wody. Niestety oryginalność naszego plakatu przegrała z
              powtarzającym się motywem legend o morskich stworzeniach. Niemniej
              jednak bardzo dobrze wspominamy topienie naszego plakatu i
              robienie mu zdjęcia w wodzie, na dachu naszej agencji. :)
            </Paragraph>
          </RightContent>
        </CenterWrapper>
      </Layout>
      <Layout>
        <CenterWrapper>
          <LeftContent>
            <Image
              src={data.adidas.childImageSharp.fluid.src}
              srcSet={data.adidas.childImageSharp.fluid.srcSet}
              sizes={data.adidas.childImageSharp.fluid.sizes}
            />
          </LeftContent>
          <RightContent>
            <Paragraph>
              <h4>YC Eurobest - Adidas</h4>
              BYŁYŚMY NA SHORTLIŚCIE! Serio! :) Kampania miała się jednak
              wydarzyć zimową porą i chyba jury konkursu ostatecznie bało się
              odmrozić kostki potencjalnych uczestników. Wystarczy jednak
              popatrzeć zimą na kobiety, chodzące w szpilkach do klubu i
              chłopaków paradujących 365 dni w roku w trampkach. Nie
              skojarzyliby przecież na stare lata problemów reumatycznych z
              Adidasem! :)
            </Paragraph>
          </RightContent>
        </CenterWrapper>
      </Layout>
    </>
  )
}

export default KonkursyContent
