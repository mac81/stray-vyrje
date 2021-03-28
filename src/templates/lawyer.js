import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { Lawyer as LawyerDetail } from "../components/lawyer/Lawyer";

const Lawyer = ({ data }) => {
  const lawyerData = data.contentfulAdvokat;
  return (
    <Layout>
      <SEO title="Advokat" />
      <LawyerDetail data={lawyerData} />
    </Layout>
  )
}

export const query = graphql`
query LawyerById($id: String!) {
  contentfulAdvokat(id: { eq: $id }) {
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


