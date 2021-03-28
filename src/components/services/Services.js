import React from 'react';
import { Container, Card, CardIcon, CardTitle, CardSummary, CardLink } from './Services.styled';



const Services = ({ data }) => {
  console.log(data)
  return (
    <>
      {data.title}
      <Container>
        {data.services.map(service => (
          <Card key={service.id}>
            <CardIcon />
            <CardTitle>{service.name}</CardTitle>
            <CardSummary>{service?.summary}</CardSummary>
            <CardLink to={`/arbeidsfelt/${service.id}`}>{`Les mer om ${service.name}`}</CardLink>
          </Card>
        ))}

      </Container>
    </>
  )
}

export default Services;