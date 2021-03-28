import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Lawyers from "../components/lawyers/Lawyers"
import { useStaticQuery, graphql } from "gatsby"


const Advokatene = () => {
  const data = useStaticQuery(graphql`
    {
      contentfulSideAdvokater {
        title
        subTitle
        lawyersList {
          id
          name
          profileImage {
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
      <Lawyers data={data.contentfulSideAdvokater} />
    </Layout>
  )
}

export default Advokatene
