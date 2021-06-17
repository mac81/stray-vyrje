import React, { useState } from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"
import styled from "styled-components"
import { colors } from "../../utils/colors"
import { StyledText, FONT_SIZE } from "../../utils/typography"
import Test from "../../icons/arrow-down.svg"

const languageName = {
  en: "English",
  nb: "Norsk",
  pt: "Portuguese",
}

const LanguageWrapper = styled.div`
  position: relative;
  margin-right: 30px;
  min-width: 80px;

  ${StyledText({ fontSize: FONT_SIZE.SMALL })};
`

const ToggleLanguage = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  padding: 5px 10px;
  color: #fff;
  cursor: pointer;

  img {
    width: 20px;

    margin: 0 5px 0 0;
  }
`

const Languages = styled.ul`
  position: absolute;
  top: 50px;
  left: 0;
  width: 100%;
  z-index: 4;
  list-style-type: none;
  /* background-color: ${colors.primary}; */
  margin: 0;
  padding: 0;

  li {
    margin: 0;
  }
`

const LanguageLink = styled.a`
  display: flex;
  align-items: center;
  color: #fff;
  margin: 0;
  padding: 5px 10px;

  cursor: pointer;
  img {
    width: 20px;
    margin: 0 5px 0 0;
  }
`

const ArrowIcon = styled(Test)`
  margin-right: 0 !important;
`

const NorwegianFlag = () => (
  <img src="https://hatscripts.github.io/circle-flags/flags/no.svg" />
)

const EnglishFlag = () => (
  <img src="https://hatscripts.github.io/circle-flags/flags/gb.svg" />
)

const Language = () => {
  const [displayLanguages, setDisplayLanguages] = useState(false)
  return (
    <LanguageWrapper>
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) => (
          <>
            <ToggleLanguage
              onClick={() => setDisplayLanguages(!displayLanguages)}
            >
              {currentLocale === "nb" ? <NorwegianFlag /> : <EnglishFlag />}
              {/* {languageName[currentLocale]} */}
              <ArrowIcon />
            </ToggleLanguage>
            {displayLanguages && (
              <Languages>
                {languages
                  .filter(language => language !== currentLocale)
                  .map(language => (
                    <li>
                      <LanguageLink
                        key={language}
                        onClick={() => changeLocale(language)}
                      >
                        {language === "nb" ? (
                          <NorwegianFlag />
                        ) : (
                          <EnglishFlag />
                        )}
                        {/* {languageName[language]} */}
                      </LanguageLink>
                    </li>
                  ))}
              </Languages>
            )}
          </>
        )}
      </IntlContextConsumer>
    </LanguageWrapper>
  )
}

export default Language
