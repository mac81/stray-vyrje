import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

import styled from "styled-components"
import { FONT_SIZE, StyledText } from "../utils/typography"
import { device } from "../utils/mediaqueries"
import { spacing } from "../utils/spacing"
import { colors } from "../utils/colors"
import Page, { PageContent, PageHeader, PageTitle } from "../components/page"
import hvitvasking from "../images/hvitvaskingsrutiner2020.pdf"
import personvern from "../images/personvern2021.pdf"
import forretningsvilkar from "../images/forretningsvilkar2020.pdf"
import { useIntl, FormattedMessage } from "gatsby-plugin-intl"

const Section = styled.section`
  background: ${props => (props.version === "dark" ? colors.primary : "#fff")};
`

const SectionTitle = styled.h2`
  ${StyledText({ fontSize: FONT_SIZE.HEADING_5 })};

  margin: 0 0 ${spacing.large} 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: uppercase;
  color: ${props => (props.version === "dark" ? "#fff" : colors.primary)};

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
`

const SubTitle = styled.h3`
  ${StyledText({ fontSize: FONT_SIZE.HEADING_6 })};
  margin: 0 0 ${spacing.large} 0;
  text-transform: uppercase;

  @media ${device.laptop} {
    ${StyledText({ fontSize: FONT_SIZE.HEADING_5 })};
    margin: 0 0 ${spacing.medium} 0;
  }
`

const SplitContainer = styled.div`
  @media ${device.laptop} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 100px;
  }
`

const Test = styled.div`
  text-align: center;
  color: #fff;

  @media ${device.laptop} {
    max-width: 700px;
    margin: 0 auto;
  }
`

const Menneskene = () => {
  const intl = useIntl()
  return (
    <Layout>
      <Seo title="Om oss" />
      <Page>
        <PageHeader>
          <PageTitle>
            <FormattedMessage id="aboutUsPage.title" />
          </PageTitle>
        </PageHeader>
        <PageContent>
          <SplitContainer>
            <div>
              <p>
                <FormattedMessage id="aboutUsPage.p1" />
              </p>
              <p>
                <FormattedMessage id="aboutUsPage.p2" />
              </p>
              <p>
                <FormattedMessage id="aboutUsPage.p3" />
              </p>
            </div>
            <div>
              <SubTitle>
                <FormattedMessage id="aboutUsPage.fees" />
              </SubTitle>
              <p>
                <FormattedMessage id="aboutUsPage.feesP1" />
                <br />
                {intl.locale === "nb" && (
                  <FormattedMessage id="aboutUsPage.feesP2" />
                )}
              </p>

              {intl.locale === "nb" && (
                <>
                  <SubTitle>Forretningsvilkår</SubTitle>
                  <ul>
                    <li>
                      <a href={forretningsvilkar} target="_blank">
                        Generelle forretningsvilkår
                      </a>
                    </li>
                    <li>
                      <a href={personvern} target="_blank">
                        Personvernærklæring
                      </a>
                    </li>
                    <li>
                      <a href={hvitvasking} target="_blank">
                        Hvitvaskingsrutiner
                      </a>
                    </li>
                  </ul>
                </>
              )}
            </div>
          </SplitContainer>
        </PageContent>
        {intl.locale === "nb" && (
          <Section version="dark">
            <PageContent>
              <SectionTitle version="dark">Verdier</SectionTitle>
              <Test>
                <p>
                  I møte med Stray Vyrje vil du oppdage at våre kjerneverdier,
                  kvalitet, integritet og tilgjengelighet kjennetegner hvordan
                  vi møter verden og utfører vårt arbeid. Vi etterstreber å
                  levere kvalitet i våre oppdrag, vi påtar oss ikke oppdrag som
                  kan gå på bekostning av vår yrkesmessige integritet. Vi
                  strekker oss langt for å være til stede for kollegaer og
                  klienter.
                </p>
              </Test>
            </PageContent>
          </Section>
        )}

        {intl.locale === "nb" && (
          <Section>
            <PageContent>
              <SectionTitle>Miljø og samfunnsansvar</SectionTitle>
              <SplitContainer>
                <div>
                  <p>
                    Stray Vyrje er en Miljøfyrtårn-bedrift. Dette betyr at vi
                    kontinuerlig jobber med miljøtiltak i hverdagen og gjennom
                    stiftelsens krav til bedriften ivaretas også et godt
                    arbeidsmiljø. Gjennom kontroll av bransjetilpassede krav
                    tildeles sertifikatet som et bevis på firmaets arbeid for et
                    bedre miljø. Hvert tredje år må bedriften resertifiseres.
                    Sertifikatet er godkjent av myndighetene og støttes og
                    anbefales av Miljøverndepartementet.
                  </p>
                  <p>
                    Les mer om Miljøfyrtårn her:{" "}
                    <a href="http://www.miljofytarn.no">www.miljofytarn.no</a>
                  </p>
                </div>

                <div>
                  <p>
                    Stray Vyrje støtter Karanba. Karanba er et sosialt prosjekt
                    i Rio de Janeiro. Med fotball som virkemiddel hjelper
                    Karanba et stort antall barn og unge fra slumområdene med
                    personlig utvikling, utdanning og utfoldelse.
                  </p>
                  <p>
                    Les mer om Karanba her:{" "}
                    <a href="http://www.karanba.com">www.karanba.com</a>
                  </p>
                </div>
              </SplitContainer>
            </PageContent>
          </Section>
        )}
      </Page>
    </Layout>
  )
}

export default Menneskene
