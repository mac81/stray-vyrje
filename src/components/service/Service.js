
import React from 'react';
import { Wrapper, Container, Sidebar, ServicesMenu, ServiceLink, Content, PrimaryTitle, SecondaryTitle, ServicesMenuTitle, Excerpt, Lawyers } from './Service.styled';
import { renderRichText } from "gatsby-source-contentful/rich-text"
import LawyerCard from '../lawyerCard/LawyerCard';

export const Service = ({ details, services }) => {
  return (
    <Wrapper>
      <Container>
        <Sidebar>
          <ServicesMenuTitle>Arbeidsfelt</ServicesMenuTitle>
          <ServicesMenu>
            {services?.map(service => (
              <li key={service.id}>
                <ServiceLink to={`/arbeidsfelt/${service.slug}`} $active={details.id === service.id}>{service.name}</ServiceLink>
              </li>
            ))}
          </ServicesMenu>


        </Sidebar>
        <Content>
          <PrimaryTitle as="h1">{details?.name}</PrimaryTitle>
          {/* <Excerpt
            dangerouslySetInnerHTML={{
              __html: details?.excerpt.childMarkdownRemark.html,
            }}
          /> */}

          {details?.body && renderRichText(details.body)}

          <SecondaryTitle as="h2">Våre advokater innen {details?.name}</SecondaryTitle>
          <Lawyers>
            {details?.lawyers.map(lawyer => (
              <LawyerCard key={lawyer.id} lawyer={lawyer} />
            ))}
          </Lawyers>

        </Content>
      </Container>


    </Wrapper>
  )
}

export default Service;