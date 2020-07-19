import React from "react"
import styled from "styled-components"
import Layout from "../../layout"
import liftactivVideo from "../../../videos/vichy/Ampułki_video_9slajd.mp4"

const Wrapper = styled.div`
  min-width: 100vw;
  max-width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
`

const Video = styled.video`
  max-height: 100vh;
  margin: 0 20px;
`

const LiftactivVideo = () => {
  return (
    <Layout>
      <Wrapper>
        <Video controls autoplay>
          <source src={liftactivVideo} />
        </Video>
      </Wrapper>
    </Layout>
  )
}

export default LiftactivVideo
