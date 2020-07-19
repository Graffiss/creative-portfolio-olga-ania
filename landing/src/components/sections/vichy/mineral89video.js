import React from "react"
import styled from "styled-components"
import Layout from "../../layout"
import leftMineral from "../../../videos/vichy/Mineral_5slajd_1video.mp4"
import rightMineral from "../../../videos/vichy/Mineral_5slajd_2video.mp4"

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: white;
`

const Video = styled.video`
  flex: 1;
  height: 80%;
  margin: 0 20px;
`

const Mineral89Video = () => {
  return (
    <Layout>
      <Wrapper>
        <Video controls autoplay>
          <source src={leftMineral} />
        </Video>
        <Video controls autoplay>
          <source src={rightMineral} />
        </Video>
      </Wrapper>
    </Layout>
  )
}

export default Mineral89Video
