import React from 'react';
import { StyledFooter, Container, Section, Logo, SectionTitle, SectionContent, InputWrapper, Input, Button } from "./Footer.styled";
import logo from "../../images/logo.png";
import { Link } from "gatsby"

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Section>
          <Link to="/">
            <Logo src={logo} />
          </Link>
          <SectionTitle as="h3">Stray Vyrje tilbyr bistand fra advokater som har bred erfaring med privat- og forretningsjus.</SectionTitle>
          <SectionContent>
            <p>Vi arbeider bl.a. mye med arbeids-, kontrakts- og selskapsrett, og har betydelig prosedyreerfaring.</p>
            <p>Som klient hos Stray Vyrje møter du løsningsorienterte advokater, som er dedikerte og tilgjengelige. Vi har spesialistkompetanse innenfor fagområdene sport- og immaterialrett.</p>
            <p>Kontakt en av våre advokater i dag, så forteller vi mer om hva vi kan oppnå sammen.</p>
          </SectionContent>
        </Section>
        <Section>
          <SectionTitle as="h3">Vi ringer deg opp!</SectionTitle>
          <p>Vi vil kontakte deg i løpet av dagen mellom 08:15 - 15:45 på hverdager.</p>
          <SectionContent>
            <form name="contact" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="contact" />
              <Input type="text" placeholder="Navn *" name="name" required />
              <Input type="text" placeholder="E-post" name="email" />

              <Input type="text" placeholder="Telefonnummer *" name="telephone" required />


              <Button type="submit">Send</Button>

            </form>
          </SectionContent>
        </Section>
      </Container>
    </StyledFooter>
  )
}

export default Footer;