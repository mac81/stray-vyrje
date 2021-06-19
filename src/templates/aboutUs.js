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
import miljofyrtarn from "../images/miljofyrtarn.pdf"
import forretningsvilkar from "../images/forretningsvilkar2020.pdf"
import { useIntl, FormattedMessage } from "gatsby-plugin-intl"
import { useStaticQuery, graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"

const Section = styled.section`
  background: ${props =>
    props.version === "dark" ? colors.secondary : "#fff"};
`

const SectionTitle = styled.h2`
  ${StyledText({ fontSize: FONT_SIZE.HEADING_5 })};

  margin: 0 0 ${spacing.large} 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: uppercase;
  color: ${props => (props.version === "dark" ? "#fff" : colors.text)};

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

const Content = styled.div`
  margin-bottom: ${spacing.large};
  p {
    margin: 0 0 ${spacing.xxsmall} 0;
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

const AboutUs = ({ data, pageContext }) => {
  const aboutUsData = data.contentfulSideOmOss

  return (
    <Layout>
      <Seo title="Om oss" />
      <Page>
        <PageHeader>
          <PageTitle>{aboutUsData.title}</PageTitle>
        </PageHeader>
        <PageContent>
          <SplitContainer>
            <div>
              {aboutUsData.aboutUs && renderRichText(aboutUsData.aboutUs)}
            </div>
            <div>
              <SubTitle>{aboutUsData.titleFees}</SubTitle>
              <Content>
                {aboutUsData.bodyFees && renderRichText(aboutUsData.bodyFees)}
              </Content>

              {aboutUsData.node_locale === "nb" && (
                <>
                  <SubTitle> {aboutUsData.titleBusinessTerms}</SubTitle>
                  <ul>
                    {aboutUsData.bodyBusinessTerms.map(reference => (
                      <li>
                        <a href={reference.file.url} target="_blank">
                          {reference.title}
                        </a>
                      </li>
                    ))}
                    {/* <li>
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
                    </li> */}
                  </ul>
                </>
              )}
            </div>
          </SplitContainer>
        </PageContent>
        {aboutUsData.node_locale === "nb" && (
          <Section version="dark">
            <PageContent>
              <SectionTitle version="dark">
                {" "}
                {aboutUsData.titleValues}
              </SectionTitle>
              <Test>
                {aboutUsData.bodyValues &&
                  renderRichText(aboutUsData.bodyValues)}
              </Test>
            </PageContent>
          </Section>
        )}

        {aboutUsData.node_locale === "nb" && (
          <Section>
            <PageContent>
              <SectionTitle> {aboutUsData.titleEnvironment}</SectionTitle>
              <SplitContainer>
                <div>
                  {aboutUsData.bodyEnvironment &&
                    renderRichText(aboutUsData.bodyEnvironment)}
                </div>

                <div>
                  {aboutUsData.bodyKaranba &&
                    renderRichText(aboutUsData.bodyKaranba)}
                </div>
              </SplitContainer>
            </PageContent>
          </Section>
        )}
      </Page>
    </Layout>
  )
}

export const query = graphql`
  query AboutUsPage($locale: String) {
    contentfulSideOmOss(node_locale: { eq: $locale }) {
      id
      node_locale
      title
      titleBusinessTerms
      titleEnvironment
      titleFees
      titleValues
      aboutUs {
        raw
      }
      bodyFees {
        raw
      }
      bodyValues {
        raw
      }
      bodyEnvironment {
        raw
      }
      bodyKaranba {
        raw
      }
      bodyBusinessTerms {
        title
        file {
          url
          fileName
        }
      }
    }
  }
`

export default AboutUs
