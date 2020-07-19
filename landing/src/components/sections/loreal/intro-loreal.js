import React from "react"
import Layout from "../../layout"
import styled from "styled-components"

const CenterWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;

  h1 {
    text-align: center;
    padding-bottom: 40px;
  }

  p {
    max-width: 50vw;
    text-align: center;
  }
`

const IntroLoreal = () => (
  <>
    <Layout>
      <CenterWrapper>
        <h1>
          KAMPANIA
          <br />
          <span>Revitalift Laser</span>
        </h1>
        <p>
          Znacie to uczucie, gdy trzeba zrobić kampanię 360, klient jest
          zachwycony, a na koniec ucinają budżet i zostaje samo TV? My też.
          Dlatego wybrałyśmy przede wszystkim nasze najlepsze pomysły, na
          których życie nie starczyło pieniędzy!
        </p>
      </CenterWrapper>
    </Layout>
  </>
)

export default IntroLoreal
