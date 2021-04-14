const path = require("path")

const createPages = async ({ graphql, actions: { createPage } }) => {
  const {
    data: { lawyers, services },
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
    }
  `)

  if (lawyers) {
    const lawyerTemplate = path.resolve("./src/templates/lawyer.js")

    lawyers.nodes.forEach(({ id, slug }) =>
      createPage({
        path: `/advokater/${slug}`,
        component: lawyerTemplate,
        context: {
          id: id,
          slug: slug
        },
      })
    )
  }

  if (services) {
    const serviceTemplate = path.resolve("./src/templates/service.js")

    services.nodes.forEach(({ id }) =>
      createPage({
        path: `/arbeidsfelt/${id}`,
        component: serviceTemplate,
        context: {
          id: id,
        },
      })
    )
  }
}

module.exports = createPages
