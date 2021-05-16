import React from "react"
import {
  StyledFooter,
  Container,
  Section,
  Logo,
  SectionTitle,
  SectionExcerpt,
  SectionContent,
  Input,
  Button,
  Info,
} from "./Footer.styled"
import logo from "../../images/logo.png"
import { Link } from "gatsby"
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"
import logo2 from "../../images/logoiurisgalblanco.png"

const Footer = ({ intl }) => {
  return (
    <StyledFooter>
      <Container>
        <Section>
          <Link to="/">
            <Logo src={logo} alt="Stray Vyrje" />
          </Link>
          <SectionExcerpt as="h3">
            <FormattedMessage id="footer.title" />
          </SectionExcerpt>
          <SectionContent>
            <p>
              <FormattedMessage id="footer.content.p1" />
            </p>
            <p>
              <FormattedMessage id="footer.content.p2" />
            </p>
            <p>
              <FormattedMessage id="footer.content.p3" />
            </p>
          </SectionContent>
        </Section>
        <Section>
          <SectionTitle as="h3">
            <FormattedMessage id="contactForm.title" />
          </SectionTitle>
          <p>
            <FormattedMessage id="contactForm.subTitle" />
          </p>
          <SectionContent>
            <form name="contact" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="callback" />
              <Input
                type="text"
                placeholder={intl.formatMessage({ id: "contactForm.name" })}
                name="name"
                required
              />
              <Input
                type="text"
                placeholder={intl.formatMessage({ id: "contactForm.email" })}
                name="email"
              />
              <Input
                type="text"
                placeholder={intl.formatMessage({
                  id: "contactForm.telephone",
                })}
                name="telephone"
                required
              />
              <Button type="submit">Send</Button>
            </form>
          </SectionContent>
        </Section>
      </Container>
      <Info>
        Stray Vyrje & Co DA Advokatfirma | Drammensveien 123 Postboks 520
        Skøyen, 0214 Oslo | (+47) 23 08 50 10 | post@svco.no
        <img src={logo2} />
      </Info>
    </StyledFooter>
  )
}

export default injectIntl(Footer)
