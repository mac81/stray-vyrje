import React from 'react';
import { Container, Card, CardTitle, CardSummary } from './Services.styled';
import { useIntl } from "gatsby-plugin-intl"

const Services = ({ data }) => {
  const intl = useIntl();

  if (intl.locale === "pt") {
    data = {
      services: [
        {
          id: "eiendomstvister",
          slug: "eiendomstvister",
          name: "Propriedade intelectual",
          excerpt: {
            childMarkdownRemark: {
              html: "A Stray Vyrje tem larga experiência na área de propriedade intelectual"
            }
          }
        }, {
          id: "immateriellrett",
          slug: "immateriellrett",
          name: "Direito trabalhista",
          excerpt: {
            childMarkdownRemark: {
              html: "A Stray Vyrje é especializada em direito trabalhista e presta assistência e defesa a empregados e empregadores"
            }
          }
        }
      ]
    }
  }
  return (

    <Container>
      {data?.services.map(service => (
        <Card to={`/arbeidsfelt/${service.slug}`} key={service.id}>
          {/* {service.icon && (
            <CardIcon>
              <Img fluid={service.icon.fluid} className="card-icon" />
            </CardIcon>
          )} */}
          <div>
            <CardTitle>{service.name}</CardTitle>

            <CardSummary
              dangerouslySetInnerHTML={{
                __html: service.excerpt.childMarkdownRemark.html,
              }}
            />
          </div>
          {/* <CardLink>{`Les mer om ${service.name}`}</CardLink> */}
        </Card>
      ))}

    </Container>

  )
}

export default Services;