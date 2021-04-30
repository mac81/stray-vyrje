import React from 'react';
import { Page, PageTitle, PageSubTitle, Cards, Card, CardName } from './Lawyers.styled';
import Img from "gatsby-image"

const Lawyers = ({ data: { title, lawyersList } }) => {
  return (

    <Cards>
      {lawyersList.map(({ id, slug, profileImage, name }) => (
        <Card key={id} to={`/advokater/${slug}`}>
          {profileImage && <Img fluid={profileImage.fluid} />}
          <CardName>{name}</CardName>
        </Card>
      ))}
    </Cards>

  )
}

export default Lawyers;