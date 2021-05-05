import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"


import styled from "styled-components";
import { FONT_SIZE, StyledText } from "../utils/typography"
import { device } from "../utils/mediaqueries"
import { spacing } from "../utils/spacing";
import { colors } from "../utils/colors"
import Page, { PageContent, PageHeader, PageTitle } from "../components/page";

const Section = styled.section`
  background: ${props => props.version === "dark" ? colors.primary : "#fff"};
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

const Menneskene = () => {
  return (
    <Layout>
      <Seo title="Om oss" />
      <Page>
        <PageHeader>
          <PageTitle>Om oss</PageTitle>
        </PageHeader>
        <PageContent>
          <p>
            Stray Vyrje bistår næringsdrivende, organisasjoner og private innenfor et bredt spekter av
            områder. Våre advokater har i tillegg lang erfaring og spisskompetanse på forretningsjus
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
          <p>Vår timepris utgjør i utgangspunkter kr 2.800 + mva. Privatklienter belastes kr 2.240 + mva.</p>
        </PageContent>

        <Section version="dark">
          <PageContent>
            <SectionTitle version="dark">Verdier</SectionTitle>
            <Test>
              <p>I møte med Stray Vyrje vil du oppdage at våre kjerneverdier, kvalitet, integritet og
              tilgjengelighet kjennetegner hvordan vi møter verden og utfører vårt arbeid. Vi
              etterstreber å levere kvalitet i våre oppdrag, vi påtar oss ikke oppdrag som kan gå
              på bekostning av vår yrkesmessige integritet. Vi strekker oss langt for å være til stede for kollegaer og klienter.</p>
            </Test>
          </PageContent>
        </Section>

        <Section>
          <PageContent>
            <SectionTitle>Miljø og samfunnsansvar</SectionTitle>
            <SplitContainer>
              <div>
                <p>
                  Stray Vyrje er en Miljøfyrtårn-bedrift. Dette betyr at vi kontinuerlig jobber med miljøtiltak i
                  hverdagen og gjennom stiftelsens krav til bedriften ivaretas også et godt arbeidsmiljø.
                  Gjennom kontroll av bransjetilpassede krav tildeles sertifikatet som et bevis på firmaets arbeid
                  for et bedre miljø. Hvert tredje år må bedriften resertifiseres. Sertifikatet er godkjent av
                  myndighetene og støttes og anbefales av Miljøverndepartementet.
                </p>
                <p>Les mer om Miljøfyrtårn her: <a href="http://www.miljofytarn.no">www.miljofytarn.no</a></p>
              </div>

              <div>
                <p>Stray Vyrje støtter Karanba. Karanba er et sosialt prosjekt
                i Rio de Janeiro. Med fotball som virkemiddel hjelper Karanba et stort antall barn og unge fra
slumområdene med personlig utvikling, utdanning og utfoldelse.</p>
                <p>Les mer om Karanba her: <a href="http://www.karanba.com">www.karanba.com</a></p>
              </div>
            </SplitContainer>
          </PageContent>
        </Section>


      </Page>

    </Layout>
  )
}

export default Menneskene
