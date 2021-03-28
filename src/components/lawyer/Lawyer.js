
import React from 'react';
import { Heading2, Heading4, Heading5, Heading6, Text } from '../../utils/typography';
import { Wrapper, Container, Sidebar, Menu, MenuItem, Content } from './Lawyer.styled';
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Img from "gatsby-image"


export const Lawyer = ({ data }) => {
  console.log(data)
  return (
    <Wrapper>
      <Container>
        <Sidebar>

          {data.profileImage && <Img fluid={data.profileImage.fluid} />}
          <Heading5>{data.name}</Heading5>
          <div>{data.phoneNumber}</div>
          <div>{data.email}</div>

        </Sidebar>
        <Content>
          {data.biography && renderRichText(data.biography)}

        </Content>
      </Container>


    </Wrapper>
  )
}

export default Lawyer;