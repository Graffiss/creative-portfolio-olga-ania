import React from "react"
import styled from "styled-components"
import Layout from "../../../layout"
import aniaPortfolioVideo from "../../../../videos/video-create.mp4"

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
`

const Header1 = styled.h1`
  flex: 1;
  color: ${({ theme }) => theme.color.text.primary};
  font-size: 54px;
  transform: rotate(-90deg);
  text-align: center;

  @media (max-width: 1450px) {
    font-size: 40px;
  }

  @media (max-width: 1200px) {
    max-width: 34vw;
  }
`

const Video = styled.video`
  flex: 5;
  max-width: 70vw;

  @media (max-width: 1450px) {
    max-width: 60vw;
  }

  @media (max-width: 1200px) {
    max-width: 40vw;
  }
`

const AniaPortfolio = () => {
  return (
    <Layout>
      <Wrapper>
        <Header1>MOJE PORTFOLIO</Header1>
        <Video controls autoplay>
          <source src={aniaPortfolioVideo} />
        </Video>
        <Header1>W PIGUŁCE</Header1>
      </Wrapper>
    </Layout>
  )
}

export default AniaPortfolio
