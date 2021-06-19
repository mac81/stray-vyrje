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
  const data = useStaticQuery(
    graphql`
      query  {
        contentfulSideOmOss {
          id
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
          bodyValues{ 
            raw
          }
          bodyEnvironment {
            raw
          }
          bodyKaranba {
            raw
          }
        }
      }
    `
  )
  
  return (
    <Layout>
      <Seo title="Om oss" />
      <Page>
        <PageHeader>
          <PageTitle>
            {data.contentfulSideOmOss.title}
          </PageTitle>
        </PageHeader>
        <PageContent>
          <SplitContainer>
            <div>
            {data.contentfulSideOmOss.aboutUs && renderRichText(data.contentfulSideOmOss.aboutUs)}
            
            </div>
            <div>
              <SubTitle>
              {data.contentfulSideOmOss.titleFees}
              </SubTitle>
              {data.contentfulSideOmOss.bodyFees && renderRichText(data.contentfulSideOmOss.bodyFees)}

              {intl.locale === "nb" && (
                <>
                  <SubTitle> {data.contentfulSideOmOss.titleBusinessTerms}</SubTitle>
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
              <SectionTitle version="dark"> {data.contentfulSideOmOss.titleValues}</SectionTitle>
              <Test>
              {data.contentfulSideOmOss.bodyValues && renderRichText(data.contentfulSideOmOss.bodyValues)}
              </Test>
            </PageContent>
          </Section>
        )}

        {intl.locale === "nb" && (
          <Section>
            <PageContent>
              <SectionTitle> {data.contentfulSideOmOss.titleEnvironment}</SectionTitle>
              <SplitContainer>
                <div>
                {data.contentfulSideOmOss.bodyEnvironment && renderRichText(data.contentfulSideOmOss.bodyEnvironment)}
                </div>

                <div>
                {data.contentfulSideOmOss.bodyKaranba && renderRichText(data.contentfulSideOmOss.bodyKaranba)}
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
