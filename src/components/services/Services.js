import React from 'react';
import { Page, PageTitle, PageSubTitle, Container, Card, CardIcon, CardTitle, CardSummary, CardLink } from './Services.styled';
import Img from "gatsby-image"


const Services = ({ data }) => {
  console.log(data)
  return (
    <Page>
      <PageTitle>{data.title}</PageTitle>
      <PageSubTitle>Stray Vyrje bistår næringsdrivende, organisasjoner og privatpersoner i spørsmål som gjelder følgende fagområder</PageSubTitle>
      <Container>
        {data.services.map(service => (
          <Card to={`/arbeidsfelt/${service.id}`} key={service.id}>
            {service.icon && (
              <CardIcon>
                <Img fluid={service.icon.fluid} />
              </CardIcon>
            )}
            <CardTitle>{service.name}</CardTitle>

            <CardSummary
              dangerouslySetInnerHTML={{
                __html: service.excerpt.childMarkdownRemark.html,
              }}
            />
            <CardLink>{`Les mer om ${service.name}`}</CardLink>
          </Card>
        ))}

      </Container>
    </Page>
  )
}

export default Services;