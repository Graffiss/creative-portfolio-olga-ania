import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../../../layout"

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10%;
  width: 50vw;
`

const Image = styled.img`
  height: 100vh;
  position: absolute;
  top: 0;
  right: 50px;
`
const Header1 = styled.h1`
  color: ${({ theme }) => theme.color.text.primary};
  font-size: 74px;
  padding-bottom: 50px;

  span {
    font-family: "Tinos";
  }
`

const Paragraph = styled.p`
  color: ${({ theme }) => theme.color.text.primary};
  font-size: 26px;
`

const Ania = () => {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "ania" }) {
        childImageSharp {
          fluid(maxHeight: 1280, quality: 100) {
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
        <ContentWrapper>
          <Header1>
            Ania - <span>Art Director</span>
          </Header1>
          <Paragraph>
            Ekscytuję się wszystkim, co ma wizualną formę. We wszystkich
            projektach, które tworzę (nawet tych najbardziej produktowych i
            konserwatywnych) zawsze kieruję się estetyką. Nie potrafię wysłać do
            klienta czegoś, co nie jest estetyczne. Doskonale czuję kwestię
            kompozycji i fascynuję się typografią. W moich projektach zawsze
            musi znaleźć się pomysłi przyciągająca strona wizualna. Jednym z
            takich projektów jest moje konto na Instagramie
            @women_in_design_team, gdzie łączę zdjęcia z typografią i przede
            wszystkim tworzę przestrzeń do promocji kreatywnych kobiet. Ktoś
            mądry kiedyś powiedział, że aby znaleźć to, co chce się w życiu
            robić, trzeba najpierw odnaleźć to, co można by robić bez
            wynagrodzenia. Dla mnie czymś takim są projekty, w których łączę
            pracującą ideę kreatywną z piękną i estetyczną egzekucją. W wolnym
            czasie oddaję się malarstwu i szkicowaniu, a także zgłębiam tematy
            ayurvedy, duchowych praktyki socjologii.
          </Paragraph>
        </ContentWrapper>
        <Image
          src={data.file.childImageSharp.fluid.src}
          srcSet={data.file.childImageSharp.fluid.srcSet}
          sizes={data.file.childImageSharp.fluid.sizes}
        />
      </Wrapper>
    </Layout>
  )
}

export default Ania
