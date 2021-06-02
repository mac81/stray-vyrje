import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Services from "../components/services/Services"
import { graphql } from "gatsby"
import Page, {
  PageTitle,
  PageSubTitle,
  PageHeader,
  PageContent,
} from "../components/page"
import { useIntl, FormattedMessage } from "gatsby-plugin-intl"

const ServicesPage = ({ data }) => {
  const intl = useIntl()

  return (
    <Layout>
      <Seo title="Arbeidsfelt" />
      <Page>
        <PageHeader>
          <PageTitle>
            {intl.locale === "pt" ? (
              <FormattedMessage id="pages.expertise.title" />
            ) : (
              data?.contentfulSideArbeidsfelt?.title
            )}
          </PageTitle>
          {/* <PageSubTitle>{intl.locale === "pt" ? <FormattedMessage id="pages.expertise.subTitle" /> : data?.contentfulSideArbeidsfelt?.subTitle}</PageSubTitle> */}
        </PageHeader>
        <PageContent>
          <Services data={data?.contentfulSideArbeidsfelt} />
        </PageContent>
      </Page>
    </Layout>
  )
}

export const query = graphql`
  query ServicesPageByLocale($locale: String) {
    contentfulSideArbeidsfelt(node_locale: { eq: $locale }) {
      title
      subTitle
      services {
        id
        slug
        name
        excerpt {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`

export default ServicesPage
