import React from 'react';
import { Cards, Card, CardContent, CardName, CardInfo } from './Lawyers.styled';
import Img from "gatsby-image"

const Lawyers = ({ data: { title, lawyersList } }) => {
  return (
    <Cards>
      {lawyersList.map(({ id, slug, profileImage, name, type }) => (
        <Card key={id} to={`/menneskene/${slug}`}>
          {profileImage && <Img fluid={profileImage.fluid} />}
          <CardContent className="card-content">
            <CardName>{name}</CardName>

            {type && <CardInfo>{type.join(", ")}</CardInfo>}
          </CardContent>
        </Card>
      ))}
    </Cards>

  )
}

export default Lawyers;