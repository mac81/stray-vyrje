import React from 'react';
import { Page, PageTitle, PageSubTitle, Cards, Card, CardName } from './Lawyers.styled';
import Img from "gatsby-image"

const Lawyers = ({ data: { title, lawyersList } }) => {
  return (
    <Page>
      <PageTitle>{title}</PageTitle>
      <PageSubTitle>We aim to lead in each practice and area of law we work in</PageSubTitle>
      <Cards>
        {lawyersList.map(({ id, slug, profileImage, name }) => (
          <Card key={id} to={`/advokater/${slug}`}>
            {profileImage && <Img fluid={profileImage.fluid} />}
            <CardName>{name}</CardName>
          </Card>
        ))}
      </Cards>
    </Page>
  )
}

export default Lawyers;