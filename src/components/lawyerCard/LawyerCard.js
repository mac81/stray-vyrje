import React from 'react';
import Img from "gatsby-image"
import { Card, CardContent, CardName, CardInfo } from './LawyerCard.styled';

const LawyerCard = ({ lawyer: { id, slug, name, profileImage, type } }) => {

  return (
    <Card key={id} to={`/menneskene/${slug}`}>
      {profileImage && <Img fluid={profileImage.fluid} />}
      <CardContent className="card-content">
        <CardName>{name}</CardName>

        {type && <CardInfo>{type.join(", ")}</CardInfo>}
      </CardContent>
    </Card>
  )
}

export default LawyerCard;