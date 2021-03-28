import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero/Hero"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Stray Vyrje" />
      <Hero />
    </Layout>
  )
}

export default IndexPage
