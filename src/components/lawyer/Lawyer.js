
import React from 'react';
import { Heading5 } from '../../utils/typography';
import { Wrapper, Container, Sidebar, ProfileImage, Profile, Content } from './Lawyer.styled';
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Img from "gatsby-image"


export const Lawyer = ({ data }) => {
  console.log(data)

  return (
    <Wrapper>
      <Container>
        <Sidebar>
          {data.profileImage && <ProfileImage><Img fluid={data.profileImage.fluid} /></ProfileImage>}
          <Profile>
            <Heading5 as="h1">{data.name}</Heading5>
            <dl>
              <dt>Telefon:</dt>
              <dd>{data.phoneNumber}</dd>
              <dt>Epost:</dt>
              <dd>{data.email}</dd>
            </dl>
          </Profile>
        </Sidebar>

        <Content>
          {data.biography && renderRichText(data.biography)}
        </Content>

      </Container>
    </Wrapper>
  )
}

export default Lawyer;