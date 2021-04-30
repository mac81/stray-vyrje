import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Lawyers from "../components/lawyers/Lawyers"
import { useStaticQuery, graphql } from "gatsby"
import Page, { PageTitle } from "../components/page";


const Menneskene = () => {
  const data = useStaticQuery(graphql`
    {
      contentfulSideAdvokater {
        title
        subTitle
        lawyersList {
          id
          slug
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
      <Page>
        <PageTitle>{data.contentfulSideAdvokater.title}</PageTitle>
        <Lawyers data={data.contentfulSideAdvokater} />
      </Page>

    </Layout>
  )
}

export default Menneskene
