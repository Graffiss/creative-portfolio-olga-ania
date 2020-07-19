import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import InniKlienciPhotos from "../components/sections/inni-klienci/inni-klienci"

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

const InniKlienci = () => (
  <>
    <Layout>
      <CenterWrapper>
        <h1>
          INNI KLIENCI
          <br />
          <span>KFC, Mastercard, So!Coffee</span>
        </h1>
      </CenterWrapper>
    </Layout>
    <InniKlienciPhotos />
  </>
)

export default InniKlienci
