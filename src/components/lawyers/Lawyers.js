import React from 'react';
import { Container, PageTitle, PageSubTitle, Cards, Card, CardName } from './Lawyers.styled';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const Lawyers = ({ data }) => {

  return (
    <Container>
      <PageTitle>{data.title}</PageTitle>
      <PageSubTitle>We aim to lead in each practice and area of law we work in</PageSubTitle>
      <Cards>
        {data.lawyersList.map(lawyer => (
          <Card key={lawyer.id} to={`/advokater/${lawyer.id}`}>
            {lawyer.profileImage && <Img fluid={lawyer.profileImage.fluid} />}
            <CardName>{lawyer.name}</CardName>
          </Card>
        ))}



      </Cards>

    </Container>
  )
}

export default Lawyers;