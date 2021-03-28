import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Services from "../components/services/Services"
import { useStaticQuery, graphql } from "gatsby"


const Advokatene = () => {
  const data = useStaticQuery(graphql`
    {
      contentfulSideArbeidsfelt {
        title
        services {
          id
          name
          
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Advokatene" />
      <Services data={data.contentfulSideArbeidsfelt} />
    </Layout>
  )
}

export default Advokatene
