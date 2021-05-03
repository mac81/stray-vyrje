import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Lawyers from "../components/lawyers/Lawyers"
import { graphql } from "gatsby"
import Page, { PageContent, PageHeader, PageTitle } from "../components/page";

const Peoples = ({ data }) => {
  return (
    <Layout>
      <Seo title={"Menneskene"} />
      <Page>
        <PageHeader>
          <PageTitle>{data.contentfulSideAdvokater.title}</PageTitle>
        </PageHeader>
        <PageContent>
          <Lawyers data={data.contentfulSideAdvokater} />
        </PageContent>
      </Page>
    </Layout>
  )
}

export const query = graphql`
query PeoplesByLocale( $locale: String) {
  contentfulSideAdvokater( node_locale: {eq: $locale}) {
    title
    lawyersList {
      id
      slug
      name
      type
      profileImage {
        fluid(maxWidth: 980) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
}
`

export default Peoples
