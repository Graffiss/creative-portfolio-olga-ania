import React from "react"
import Layout from "../../layout"
import styled from "styled-components"

const CenterWrapper = styled.div`
  min-width: 100vw;
  max-width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;

  p {
    max-width: 50vw;
    text-align: center;
  }
`

const IntroVichy = () => (
  <>
    <Layout>
      <CenterWrapper>
        <p>
          Nasz główny klient, tylko nasz i jeden z najtrudniejszych w agencji.
          Wszyscy tak mówią? Nie, nie, ten jest NAPRAWDĘ trudny! Trochę jak Mann
          i Materna w sketchu o reklamie. Ale nie poddawałyśmy się i każdorazowo
          proponowałyśmy ciekawe rozwiązania! No… i o dermokosmetykach wiemy
          wszystko! :)  Materiałów mamy duuużo, dlatego przedstawiamy skrót
          naszej pracy na tym kliencie, czyli nasze najładniejsze kreacje.
        </p>
      </CenterWrapper>
    </Layout>
  </>
)

export default IntroVichy
