import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import KonkursyPhotos from "../components/sections/konkursy/konkursy"

const CenterWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;

  h1 {
    text-align: center;
  }
`

const Konkursy = () => (
  <>
    <Layout>
      <CenterWrapper>
        <h1>NASZE PRACE KONKURSOWE</h1>
      </CenterWrapper>
    </Layout>
    <KonkursyPhotos />
  </>
)

export default Konkursy
