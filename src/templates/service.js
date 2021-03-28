import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { Service as ServiceDetail } from "../components/service/Service";

const Service = ({ data }) => {
  console.log(data)
  const serviceData = data.contentfulArbeidsfelt;
  const servicesData = data.contentfulSideArbeidsfelt.services;
  return (
    <Layout>
      <SEO title="Arbeidsfelt" />
      <ServiceDetail details={serviceData} services={servicesData} />
    </Layout>
  )
}

export const query = graphql`
query ServiceById($id: String!) {
  contentfulArbeidsfelt(id: { eq: $id }) {
    name
    id
    excerpt {
      childMarkdownRemark {
        html
      }
    }
    body {
      raw
    }
    lawyers {
      name
      id
      profileImage {
        fluid(maxWidth: 980) {
          ...GatsbyContentfulFluid
       }
      }
    }
  }
  contentfulSideArbeidsfelt {
    services {
      name
      id
    }
  }
}
`

export default Service;


