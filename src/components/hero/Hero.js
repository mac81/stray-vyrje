import React from 'react';
import { StyledHero, Container, Card, Title, Actions, Action } from './Hero.styled';
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl";
// import { Parallax, Background } from 'react-parallax';
import Header from '../header/Header';

const Hero = ({ intl }) => {
  return (
    <StyledHero>
      <Header displayBackground={false} />

      <Container>
        <Card>
          <Title as="h1"><FormattedMessage id="hero" /></Title>
          <Actions>
            <Action to="/arbeidsfelt"><FormattedMessage id="menu.services" /></Action>
            <Action to="/menneskene"><FormattedMessage id="menu.peoples" /></Action>
            <Action to="/kontakt"><FormattedMessage id="menu.contact" /></Action>
          </Actions>
        </Card>
      </Container>




    </StyledHero>
  )
}

export default injectIntl(Hero);