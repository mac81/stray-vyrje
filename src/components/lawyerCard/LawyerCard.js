import React from 'react';
import Img from "gatsby-image"
import { Card, CardName } from './LawyerCard.styled';

const LawyerCard = ({ lawyer: { id, slug, name, profileImage } }) => {

  return (
    <Card key={id} to={`/advokater/${slug}`}>
      {profileImage && <Img fluid={profileImage.fluid} />}
      <CardName>{name}</CardName>
    </Card>
  )
}

export default LawyerCard;