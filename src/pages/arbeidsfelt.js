import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Services from "../components/services/Services"
import { useStaticQuery, graphql } from "gatsby"
import Page, { PageTitle, PageSubTitle } from "../components/page"


const Advokatene = () => {
  const data = useStaticQuery(graphql`
    {
      contentfulSideArbeidsfelt {
        title
        subTitle
        services {
          id
          name
          excerpt {
            childMarkdownRemark {
              html
            }
          }
          icon {
            fluid(maxWidth: 980) {
              ...GatsbyContentfulFluid
           }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Advokatene" />
      <Page>
        <PageTitle>{data?.contentfulSideArbeidsfelt?.title}</PageTitle>
        <PageSubTitle>{data?.contentfulSideArbeidsfelt?.subTitle}</PageSubTitle>
        <Services data={data.contentfulSideArbeidsfelt} />
      </Page>

    </Layout>
  )
}

export default Advokatene
