import React from "react"
import Layout from "../../../layout"
import styled from "styled-components"

const CenterWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    max-width: 50vw;
  }
`

const Header1 = styled.h1`
  font-size: 90px;
  text-align: center;
  margin-bottom: 50px;

  span {
    font-family: "Playfair Display";
  }
`

const OlgaPortfolio = () => (
  <>
    <Layout>
      <CenterWrapper>
        <Header1>
          MOJE COPY W
          <br />
          <span>"Prawie pigułce"</span>
        </Header1>
        <p>
          Niestety ciężko przedstawić swoje copy (szczególnie to dłuższe) w
          minutowym video, dlatego wybrałam kilka moich ulubionych KV, których
          haseł jestem autorką, dwa advertoriale i dwa rich contenty, jeden
          przykład tłumaczenia oraz spot, którego scenariusza jestem
          współautorką i do którego napisałam dialogi.
        </p>
      </CenterWrapper>
    </Layout>
  </>
)

export default OlgaPortfolio
