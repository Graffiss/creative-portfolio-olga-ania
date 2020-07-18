import React from "react"
import styled from "styled-components"
import Layout from "../../../layout"
import spokojVideo from "../../../../videos/daj-sobie-spokoj.mp4"

const Wrapper = styled.div`
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Header1 = styled.h1`
  color: ${({ theme }) => theme.color.text.primary};
  font-size: 36px;
  margin: 30px 0;
  text-align: left;
`

const Video = styled.video`
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 70vh;
`

const DajSobieSpokoj = () => {
  return (
    <Layout>
      <Wrapper>
        <Header1>
          Spot pt. Daj sobie spokój dla Społecznej Agencji Najmu
        </Header1>
        <Video controls autoplay>
          <source src={spokojVideo} />
        </Video>
        <Header1>
          Scenariusz: Olga Markiewicz, Anna Kubas
          <br />
          Reżyseria: Krzysztof Grudziński
        </Header1>
      </Wrapper>
    </Layout>
  )
}

export default DajSobieSpokoj
