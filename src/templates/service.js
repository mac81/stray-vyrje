import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import { Service as ServiceDetail } from "../components/service/Service";

const Service = ({ data }) => {
  const serviceData = data.contentfulArbeidsfelt;
  const servicesData = data.contentfulSideArbeidsfelt.services;
  return (
    <Layout>
      <Seo title={`Arbeidsfelt ${serviceData.name}`} />
      <ServiceDetail details={serviceData} services={servicesData} />
    </Layout>
  )
}

export const query = graphql`
query ServiceBySlug($slug: String!, $locale: String) {
  contentfulArbeidsfelt(slug: { eq: $slug }, node_locale: {eq: $locale}) {
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
      slug
      name
      id
      type
      profileImage {
        fluid(maxWidth: 980) {
          ...GatsbyContentfulFluid
       }
      }
    }
  }
  contentfulSideArbeidsfelt(node_locale: {eq: $locale}) {
    services {
      name
      slug
      id
    }
  }
}
`

export default Service;


