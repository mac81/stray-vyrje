import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Page, { PageHeader, PageTitle, PageContent } from "../components/page"
import styled from "styled-components"
import { FONT_SIZE, StyledText } from "../utils/typography"
import { spacing } from "../utils/spacing"
import { colors } from "../utils/colors"
import { device } from "../utils/mediaqueries"
import ContactForm from "../components/contactForm/ContactForm"
import { FormattedMessage } from "gatsby-plugin-intl"

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
`

const Section = styled.div`
  margin-bottom: ${spacing.xlarge};
  p {
    margin: ${spacing.xxsmall} 0;
  }
`

const SectionTitle = styled.h2`
  ${StyledText({ fontSize: FONT_SIZE.HEADING_5 })};
  margin: 0 0 ${spacing.medium} 0;
`

const ContactPage = () => {
  return (
    <Layout>
      <Seo title="Kontakt oss" />
      <Page>
        <PageHeader>
          <PageTitle>
            <FormattedMessage id="contactPage.title" />
          </PageTitle>
        </PageHeader>
        <PageContent>
          <Sections>
            <Section>
              <SectionTitle>
                <FormattedMessage id="contactPage.formTitle" />
              </SectionTitle>
              <ContactForm />
            </Section>
            <Section>
              <SectionTitle>
                <FormattedMessage id="contactPage.contactInformationTitle" />
              </SectionTitle>
              <div>
                <p>Stray Vyrje & Co DA Advokatfirma</p>
                <p>Drammensveien 123 (3. etasje)</p>
                <p>Postboks 520 Skøyen, 0214 Oslo</p>
              </div>

              <dl>
                <dt>
                  <FormattedMessage id="contactForm.telephone" />
                </dt>
                <dd>
                  <a href="tel:+4723085010">(+47) 23 08 50 10</a>
                </dd>
                <dt>
                  <FormattedMessage id="contactForm.email" />
                </dt>
                <dd>
                  <a href="mailto:post@svco.no">post@svco.no</a>
                </dd>
              </dl>

              <SectionTitle>
                <FormattedMessage id="contactPage.firmInformationTitle" />
              </SectionTitle>
              <dl>
                <dt>
                  <FormattedMessage id="contactPage.vatNumberLabel" />
                </dt>
                <dd>
                  <FormattedMessage id="contactPage.vatNumberValue" />
                </dd>
              </dl>

              <SectionTitle>
                <FormattedMessage id="contactPage.mapTitle" />
              </SectionTitle>
              <iframe
                title="Google maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1999.6402302805068!2d10.68699931668713!3d59.92151798186988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416dca0acb451d%3A0xd2a0f689d0c560c!2sStray%20Vyrje%20%26%20Co%20DA%20Advokatfirma!5e0!3m2!1sno!2sno!4v1620054636726!5m2!1sno!2sno"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              />

              <SectionTitle>
                <FormattedMessage id="contactPage.openingHoursTitle" />
              </SectionTitle>
              <p>
                <FormattedMessage id="contactPage.openingHoursP1" />
              </p>
              <p>
                <FormattedMessage id="contactPage.openingHoursP2" />
              </p>
              <p>
                <FormattedMessage id="contactPage.openingHoursP3" />
              </p>
            </Section>
          </Sections>
        </PageContent>
      </Page>
    </Layout>
  )
}

export default ContactPage
