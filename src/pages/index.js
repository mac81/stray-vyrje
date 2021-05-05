import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero/Hero"
import Seo from "../components/seo"

const IndexPage = () => {
  return (
    <Layout displayHeader={false}>
      <Seo title="Stray Vyrje" />
      <Hero />
    </Layout>
  )
}

export default IndexPage
