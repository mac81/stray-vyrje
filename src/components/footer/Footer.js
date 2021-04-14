import React from 'react';
import { StyledFooter, Container, Section, Logo, SectionTitle, SectionContent } from "./Footer.styled";
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
          <form name="contact" method="POST" data-netlify="true">
            <p>
              <label>Your Name: <input type="text" name="name" /></label>
            </p>
            <p>
              <label>Your Email: <input type="email" name="email" /></label>
            </p>

            <p>
              <label>Message: <textarea name="message"></textarea></label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
        </Section>
      </Container>
    </StyledFooter>
  )
}

export default Footer;