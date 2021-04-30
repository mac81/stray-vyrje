import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { Lawyer as LawyerDetail } from "../components/lawyer/Lawyer";

const Lawyer = ({ data, location }) => {
  const lawyerData = data.contentfulAdvokat;
  console.log(lawyerData)

  return (
    <Layout>
      <SEO title="Advokat" />
      <LawyerDetail data={lawyerData} />
    </Layout>
  )
}

export const query = graphql`
query LawyerBySlug($slug: String!, $locale: String) {
  contentfulAdvokat(slug: { eq: $slug }, node_locale: {eq: $locale}) {
    name
    phoneNumber
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


