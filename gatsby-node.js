const Promise = require('bluebird')
const path = require('path')
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const lawyerTemplate = path.resolve('./src/templates/lawyer.js');
    const serviceTemplate = path.resolve('./src/templates/service.js');

    resolve(
      graphql(
        `
          {
            allContentfulAdvokat {
              edges {
                node {
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
            }
            allContentfulArbeidsfelt {
              edges {
                node {
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
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const lawyers = result.data.allContentfulAdvokat.edges
        lawyers.forEach(lawyer => {
          createPage({
            path: `/advokater/${lawyer.node.id}/`,
            component: lawyerTemplate,
            context: {
              id: lawyer.node.id,
            },
          })
        })

        const services = result.data.allContentfulArbeidsfelt.edges
        services.forEach(service => {
          createPage({
            path: `/arbeidsfelt/${service.node.id}/`,
            component: serviceTemplate,
            context: {
              id: service.node.id,
            },
          })
        })
      })
    )
  })


}
