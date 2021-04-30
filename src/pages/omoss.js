import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Lawyers from "../components/lawyers/Lawyers"
import { useStaticQuery, graphql } from "gatsby"

import styled from "styled-components";
import { FONT_SIZE, Heading6, StyledText } from "../utils/typography"
import { device } from "../utils/mediaqueries"
import { spacing } from "../utils/spacing";
import { colors } from "../utils/colors"


const Page = styled.div`
  background-color: #f5f5f5;
`;

const PageTitle = styled.h1`
  ${StyledText({ fontSize: FONT_SIZE.HEADING_2 })};
`;

const Section = styled.section`
  background: ${props => props.version === "dark" ? colors.primary : "#fff"};
`;

const SectionContent = styled.section`
  width: 100%;
  padding: ${spacing.large};
  ${StyledText({ fontSize: FONT_SIZE.TEXT })};

  @media ${device.laptop} {
    max-width: 1280px;
    margin: 0 auto;
  padding: ${spacing.xxxlarge} 0;
  }

  a {
    color: ${colors.highlight};
  }
`;

const SectionTitle = styled.h2`
  ${StyledText({ fontSize: FONT_SIZE.HEADING_5 })};

  margin: 0 0 ${spacing.large} 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: uppercase;
  color: ${props => props.version === "dark" ? "#fff" : colors.primary};

  &:after {
    content: "";
    height: 2px;
    width: 100px;
    margin-top: 5px;
    background-color: ${colors.highlight};
  }

  @media ${device.laptop} {
    
    ${StyledText({ fontSize: FONT_SIZE.HEADING_4 })};
    margin: 0 0 ${spacing.xxlarge} 0;
  }
`;


const SubTitle = styled.h3`
  ${StyledText({ fontSize: FONT_SIZE.HEADING_6 })};

  margin: 0 0 ${spacing.large} 0;
 
  text-transform: uppercase;
  

  

  @media ${device.laptop} {
    
    ${StyledText({ fontSize: FONT_SIZE.HEADING_5 })};
    margin: 0 0 ${spacing.medium} 0;
  }
`;

const SplitContainer = styled.div`
  

  @media ${device.laptop} {
    display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 100px;
  }
`;

const Test = styled.div`
text-align: center;
  color: #fff;
  

  @media ${device.laptop} {
    max-width: 700px;
  margin: 0 auto;
  
  }
`;

const Input = styled.input`
  width: 100%;
  background-color: #fff;
  border-radius: 5px;
  padding: ${spacing.xsmall};
  
  margin: 0 0 20px 0;
  border-style: solid;
  border-width: 1px;
  border-color: transparent;

  @media ${device.laptop} {
    padding: ${spacing.medium};
  }

  &:focus {
    border-color: #e6e6e6;
    outline: none;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  background-color: #fff;
  border-radius: 5px;
  padding: ${spacing.medium};
  
  margin: 0 0 20px 0;
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  resize:vertical;

  &:focus {
    border-color: #e6e6e6;
    outline: none;
  }
`;


const Button = styled.button`
  border: none;
  border-radius: 5px;
  padding: ${spacing.xsmall} ${spacing.xlarge};
  background-color: ${colors.highlight};
  color: #fff;
  
  @media ${device.laptop} {
    padding: ${spacing.small} ${spacing.xlarge};
  }
`;

const Menneskene = () => {
  // const data = useStaticQuery(graphql`
  //   {
  //     contentfulSideAdvokater {
  //       title
  //       subTitle
  //       lawyersList {
  //         id
  //         slug
  //         name
  //         profileImage {
  //           fluid(maxWidth: 980) {
  //             ...GatsbyContentfulFluid
  //          }
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <Layout>
      <SEO title="Om oss" />
      <Page>
        <SectionContent>
          <PageTitle>Om oss</PageTitle>
          <SplitContainer>
            <div>
              <p>
                Stray Vyrje bistår næringsdrivende, organisasjoner og private innenfor et bredt spekter av
                områder. Våre advokater har i tillegg svært lang erfaring og spisskompetanse på forretningsjus
                og privatrett, sport, og immaterielle rettigheter.
        </p>
              <p>
                Vi arbeider bl.a. med arbeids-, kontrakts- og selskapsrett, og har betydelig prosedyreerfaring.
                Flere av våre advokater er forfattere på Gyldendal Rettsdata, fagbokforfattere og forelesere.
        </p>
              <p>
                Som klient hos Stray Vyrje møter du løsningsorienterte advokater, som er dedikerte og
                tilgjengelige. Vi har spesialistkompetanse innenfor sport og immaterielle rettigheter. Kontakt oss
                i dag, så forteller vi mer om hva vi kan oppnå sammen.
        </p>
              <SubTitle>Timepris</SubTitle>
              <p>Timepris utgjør NOK 2.000 – 4.000 ekskl. mva. beroende på oppdragets kompleksitet og omfang.</p>
            </div>
            <div>
              <SubTitle>Trenger du hjelp?</SubTitle>
              <p>Legg igjen en beskjed så vil vi kontakte deg mellom 08:15 - 15:45 på hverdager.</p>
              <form>

                <Input type="text" placeholder="Navn" />
                <Input type="text" placeholder="Epost *" required />
                <Input type="text" placeholder="Telefon" />
                <Textarea placeholder="Melding"></Textarea>
                <Button>Send</Button>
              </form>
            </div>
          </SplitContainer>
        </SectionContent>

        <Section version="dark">
          <SectionContent>
            <SectionTitle version="dark">Verdier</SectionTitle>
            <Test>
              <p>I møte med Stray Vyrje vil du raskt oppdage at våre kjerneverdier: Kvalitet, integritet og
              tilgjengelighet tilsammen kjennetegner hvordan vi møter mennesker og utfører vårt arbeid. Vi
              etterstreber alltid å levere høy kvalitet i våre oppdrag, vi påtar oss ikke oppdrag som vil kunne gå
              på bekostning av vår yrkesmessige eller personlige integritet og vi strekker oss langt for å alltid
kunne være til stede for både kollegaer og klienter.</p>
            </Test>
          </SectionContent>
        </Section>

        <Section>
          <SectionContent>
            <SectionTitle>Miljø og samfunnsansvar</SectionTitle>
            <SplitContainer>
              <div>
                <p>
                  Stray Vyrje er en Miljøfyrtårn bedrift. Dette betyr at vi kontinuerlig jobber med miljøtiltak i
                  hverdagen og gjennom stiftelsens krav til bedriften ivaretas også et godt arbeidsmiljø.
                  Gjennom kontroll av bransjetilpassede krav tildeles sertifikatet som et bevis på firmaets arbeid
                  for et bedre miljø. Hvert tredje år må bedriften resertifiseres. Sertifikatet er godkjent av
                  myndighetene og støttes og anbefales av Miljøverndepartementet.
        </p>
                <p>Les mer om Miljøfyrtårn her: <a href="http://www.miljofytarn.no">www.miljofytarn.no</a></p>
              </div>

              <div>
                <p>På utsiden av eget kontor er Stray Vyrje involvert Karanba i Brasil. Karanba er et sosialt prosjekt
                i Rio de Janeiro. Med fotball som virkemiddel hjelper Karanba et stort antall barn og unge fra
slumområdene med personlig utvikling, utdanning og utfoldelse.</p>
                <p>Les mer om Karanba her: <a href="http://www.karanba.com">www.karanba.com</a></p>
              </div>
            </SplitContainer>
          </SectionContent>
        </Section>


      </Page>

    </Layout>
  )
}

export default Menneskene
