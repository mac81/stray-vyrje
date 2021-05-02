import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Services from "../components/services/Services"
import { graphql } from "gatsby"
import Page, { PageTitle, PageSubTitle, PageHeader, PageContent } from "../components/page"

const ServicesPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="Advokatene" />
      <Page>
        <PageHeader>
          <PageTitle>{data?.contentfulSideArbeidsfelt?.title}</PageTitle>
          <PageSubTitle>{data?.contentfulSideArbeidsfelt?.subTitle}</PageSubTitle>
        </PageHeader>
        <PageContent>
          <Services data={data.contentfulSideArbeidsfelt} />
        </PageContent>
      </Page>
    </Layout>
  )
}



export const query = graphql`
query ServicesPageByLocale( $locale: String) {
  contentfulSideArbeidsfelt( node_locale: {eq: $locale}) {
    title
         subTitle
         services {
            
          id
         slug
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
`

export default ServicesPage
