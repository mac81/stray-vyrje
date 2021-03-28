import React from 'react';
import { StyledHero, Container, Card, Title, Actions, Action } from './Hero.styled';


const Hero = () => {
  return (
    <StyledHero>
      <Container>
        <Card>
          <Title as="h1">Vi bistår næringsdrivende, organisasjoner og private innenfor et bredt spekter av områder.</Title>
          <Actions>
            <Action to="/arbeidsfelt">Arbeidsfelt</Action>
            <Action to="/advokater">Advokatene</Action>
          </Actions>
        </Card>
      </Container>
    </StyledHero>
  )
}

export default Hero;