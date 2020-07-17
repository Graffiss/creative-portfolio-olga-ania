import React from "react"
import styled from "styled-components"
import Layout from "../../../components/layout"
import MemeImg from "../../../images/meme.png"

const Background = styled.div`
  background-color: #24327c;
  width: 70vw;
  height: 100vh;
  position: absolute;
  z-index: -1;
`

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
`

const Header1 = styled.h1`
  flex: 1;
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: 54px;
  transform: rotate(-90deg);
`

const Meme = styled.img`
  border: 6px solid white;
  border-radius: 4px;
  height: 354px;
  width: 558px;
  margin: 0 50px;
`

const Paragraph = styled.p`
  flex: 3;
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: 26px;
`

const OurTeam = () => {
  return (
    <Layout>
      <Background />
      <Wrapper>
        <Header1>NASZ TEAM</Header1>
        <Paragraph>
          Team doskonały. W agencji połączył nas nasz dyrektor kreatywny,
          któremu jesteśmy za to bardzo wdzięczne. Polsko - ukraiński skład,
          który dopełnia się w każdym calu. Nigdy się nie kłócimy, za to zawsze
          wzajemnie się inspirujemy. Olga wie, że Ania zawsze na czas dowiezie
          przepiękne wizualizacje, a Ania jest spokojna, bo Olga zawsze trafi w
          punkt z copy. Przy koncepcjach kreatywnych łatwiej pracuje nam się
          razem niż osobno. Wielokrotnie zaskakujemy same siebie, że zawsze
          potrafimy zrobić coś z niczego. Zrobić kampanię w digitalu, mając do
          dyspozycji tylko packshot produktu? Challange accepted!
        </Paragraph>
        <Meme src={MemeImg} />
      </Wrapper>
    </Layout>
  )
}

export default OurTeam
