import React from 'react';
import { Page, PageTitle, PageSubTitle, Container, Card, CardIcon, CardTitle, CardSummary, CardLink } from './Services.styled';
import Img from "gatsby-image"


const Services = ({ data }) => {

  return (

    <Container>
      {data.services.map(service => (
        <Card to={`/arbeidsfelt/${service.id}`} key={service.id}>
          {service.icon && (
            <CardIcon>
              <Img fluid={service.icon.fluid} className="card-icon" />
            </CardIcon>
          )}
          <CardTitle>{service.name}</CardTitle>

          <CardSummary
            dangerouslySetInnerHTML={{
              __html: service.excerpt.childMarkdownRemark.html,
            }}
          />
          {/* <CardLink>{`Les mer om ${service.name}`}</CardLink> */}
        </Card>
      ))}

    </Container>

  )
}

export default Services;