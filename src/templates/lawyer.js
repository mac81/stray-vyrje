import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import { Lawyer as LawyerDetail } from "../components/lawyer/Lawyer";

const Lawyer = ({ data, pageContext }) => {
  const lawyerData = data.contentfulAdvokat;

  return (
    <Layout>
      <Seo title="Advokat" />
      <LawyerDetail data={lawyerData} locale={pageContext.locale} />
    </Layout>
  )
}

export const query = graphql`
query LawyerBySlug($slug: String!, $locale: String) {
  contentfulAdvokat(slug: { eq: $slug }, node_locale: {eq: $locale}) {
    name
    phoneNumber
    type
    email
    biography {
      raw
    }
    profileImage {
      fluid(maxWidth: 980) {
        ...GatsbyContentfulFluid
     }
    }
  }
}
`

export default Lawyer;


