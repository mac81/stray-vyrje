import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo";
import Page, { PageHeader, PageTitle, PageContent } from "../components/page";
import styled from "styled-components"
import { FONT_SIZE, StyledText } from "../utils/typography";
import { spacing } from "../utils/spacing";
import { colors } from "../utils/colors";
import { device } from "../utils/mediaqueries"
import ContactForm from "../components/contactForm/ContactForm";

const Sections = styled.div`


  @media ${device.laptop} {
    display: grid;
  grid-template-columns: 2fr 1fr;
  grid-column-gap: 150px;
  }

  p {
    margin: 0 0 5px 0;
  }

a {
  color: ${colors.highlight};
}

  dl {
    margin: 20px 0;
    display: grid;
  grid-template-columns: max-content auto;
  grid-column-gap: 5px;
  }

  dt {
  grid-column-start: 1;
  margin: 0;
}

dd {
  grid-column-start: 2;
  margin: 0;
}
`;

const Section = styled.div`
  margin-bottom: ${spacing.xlarge};
  p {
    margin: ${spacing.medium} 0;
  }
`;

const SectionTitle = styled.h2`
  ${StyledText({ fontSize: FONT_SIZE.HEADING_5 })};
  margin: 0 0 ${spacing.medium} 0;
`;




const ContactPage = () => {
  return (
    <Layout>
      <Seo title="Kontakt oss - Stray Vyrje" />
      <Page>
        <PageHeader>
          <PageTitle>Kontakt oss</PageTitle>
        </PageHeader>
        <PageContent>
          <Sections>

            <Section>
              <SectionTitle>Legg igjen en beskjed</SectionTitle>
              <p>Legg igjen en beskjed så kontakter vi deg så fort vi har mulighet</p>
              <ContactForm />
            </Section>
            <Section>
              <SectionTitle>Kontaktinformasjon</SectionTitle>
              <div>
                <p>Stray Vyrje & Co DA Advokatfirma</p>
                <p>Drammensveien 123 (3. etasje)</p>
                <p>Postboks 520 Skøyen, 0214 Oslo</p>
              </div>
              <dl>
                <dt>Telefon</dt>
                <dd><a href="tel:+4723085010">(+47) 23 08 50 10</a></dd>
                <dt>Epost</dt>
                <dd><a href="mailto:post@svco.no">post@svco.no</a></dd>
              </dl>

              <SectionTitle>Åpningstid</SectionTitle>
              <p>Resepsjon og sentralbord betjenes ukedager kl. 09.00 - 12.15 og 12.45 - 17.00</p>
              <p>Henvendelser etter kontortid rettes direkte til advokatene</p>
            </Section>
          </Sections>
        </PageContent>
      </Page>
    </Layout>
  )
}

export default ContactPage

