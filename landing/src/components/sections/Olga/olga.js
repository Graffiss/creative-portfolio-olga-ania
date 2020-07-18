import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../../layout"

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
`

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 0 10%;
  width: 50vw;
`

const ImageWrapper = styled.div`
  flex: 1;
`

const Image = styled.img`
  height: 100vh;
  position: absolute;
  top: 0;
  right: 10%;
`
const Header1 = styled.h1`
  color: ${({ theme }) => theme.color.text.primary};
  font-size: 74px;
  padding-bottom: 50px;

  span {
    font-family: "Tinos";
  }
`

const Paragraph = styled.p`
  color: ${({ theme }) => theme.color.text.primary};
  font-size: 26px;
`

const Olga = () => {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "olga" }) {
        childImageSharp {
          fluid(maxHeight: 1280, quality: 100) {
            src
            srcSet
            sizes
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Wrapper>
        <ContentWrapper>
          <Header1>
            Olga - <span>Copywriter</span>
          </Header1>
          <Paragraph>
            W życiu jestem pozytywną perfekcjonistką, a zawodowo - copywriterem
            jestem z powołania! Stoję na straży poprawnej polszczyzny i
            interpunkcji w nierównych starciach z klientami. Czasami jednak
            moimi klientami są moi przyjaciele, a ci w 100% mi ufają. Tym samym
            zostałam ostatnio autorką tytułu książki dla dzieci, a także wzięłam
            na swoje barki korektę tekstu. Po 10 latach na scenie, prezentacje
            przed klientem to dla mnie przyjemność. Moje największe zawodowe
            marzenie? W końcu zrobić własny spot i pojechać na shoot oraz
            stworzyć kampanię w digitalu, na którą rzeczywiście znajdzie się
            budżet. Po godzinach prowadzę swojego instagrama
            @praktycznieomieszkaniu i planuję wrócić do swoich, ukochanych sztuk
            walki. Można być jednak spokojnym, gdyż w życiu cenię sobie pokojowe
            rozwiązania i nie dopuszczam się rękoczynów. ;)
          </Paragraph>
        </ContentWrapper>
        <ImageWrapper>
          <Image
            src={data.file.childImageSharp.fluid.src}
            srcSet={data.file.childImageSharp.fluid.srcSet}
            sizes={data.file.childImageSharp.fluid.sizes}
          />
        </ImageWrapper>
      </Wrapper>
    </Layout>
  )
}

export default Olga
