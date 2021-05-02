const path = require("path")

const createPages = async ({ graphql, actions: { createPage } }) => {
  const {
    data: { lawyers, services, servicesPage, peoples },
  } = await graphql(`
    {
      lawyers: allContentfulAdvokat {
        nodes {
          slug
          node_locale
          name
          phoneNumber
          email
          id
          biography {
            raw
          }
          profileImage {
            fluid {
              base64
              tracedSVG
              srcWebp
              srcSetWebp
            }
          }
        }
      }
      services: allContentfulArbeidsfelt {
        nodes {
          slug
          node_locale
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
            profileImage {
              fluid {
                base64
                tracedSVG
                srcWebp
                srcSetWebp
              }
            }
          }
        }
      }
      servicesPage: allContentfulSideArbeidsfelt {
        nodes {
          title
          id
          node_locale
          
        }
      }
      peoples: allContentfulSideAdvokater {
        nodes {
          title
          id
          node_locale 
        }
      }
    }
  `)

  if (lawyers) {
    const lawyerTemplate = path.resolve("./src/templates/lawyer.js")

    lawyers.nodes.forEach(({ id, slug }) =>
      createPage({
        path: `/menneskene/${slug}`,
        component: lawyerTemplate,
        context: {
          id,
          slug
        },
      })
    )
  }

  if (services) {
    const serviceTemplate = path.resolve("./src/templates/service.js")

    services.nodes.forEach(({ id, slug }) =>
      createPage({
        path: `/arbeidsfelt/${slug}`,
        component: serviceTemplate,
        context: {
          id,
          slug
        },
      })
    )
  }

  if (servicesPage) {
    const servicePageTemplate = path.resolve("./src/templates/servicesPage.js")

    servicesPage.nodes.forEach(({ id }) =>
      createPage({
        path: `/arbeidsfelt`,
        component: servicePageTemplate,
        context: {
          id
        },
      })
    )
  }

  if (peoples) {
    const peoplesTemplate = path.resolve("./src/templates/peoples.js")

    peoples.nodes.forEach(({ id }) =>
      createPage({
        path: `/menneskene`,
        component: peoplesTemplate,
        context: {
          id
        },
      })
    )
  }
}

module.exports = createPages
