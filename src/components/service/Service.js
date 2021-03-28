
import React from 'react';
import { Heading2, Heading4, Heading5, Heading6, Text } from '../../utils/typography';
import { Wrapper, Container, Sidebar, ServicesMenu, ServiceLink, Content, ServicesMenuTitle, Excerpt } from './Service.styled';
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Img from "gatsby-image"



export const Service = ({ details, services }) => {
  console.log(details)
  return (
    <Wrapper>
      <Container>
        <Sidebar>
          <ServicesMenuTitle>Arbeidsfelt</ServicesMenuTitle>
          <ServicesMenu>
            {services.map(service => (
              <li>
                <ServiceLink to={`/arbeidsfelt/${service.id}`} $active={details.id === service.id}>{service.name}</ServiceLink>
              </li>
            ))}
          </ServicesMenu>


        </Sidebar>
        <Content>
          <h1>{details.name}</h1>
          <Excerpt
            dangerouslySetInnerHTML={{
              __html: details.excerpt.childMarkdownRemark.html,
            }}
          />

          {details.body && renderRichText(details.body)}

          <h2>Våre advokater innen {details.name}</h2>
          <div>
            {details.lawyers.map(lawyer => (
              <div>{lawyer.name}</div>
            ))}
          </div>

        </Content>
      </Container>


    </Wrapper>
  )
}

export default Service;