import React from "react"
import styled from "styled-components"
import Layout from "../../../layout"
import leftRichVideo from "../../../../videos/rich-content1.mp4"
import rightRichVideo from "../../../../videos/rich-content2.mp4"

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
`

const Video = styled.video`
  flex: 1;
  max-height: 100vh;
  margin: 0 20px;
`

const RichContent = () => {
  return (
    <Layout>
      <Wrapper>
        <Video controls autoplay>
          <source src={leftRichVideo} />
        </Video>
        <Video controls autoplay>
          <source src={rightRichVideo} />
        </Video>
      </Wrapper>
    </Layout>
  )
}

export default RichContent
