import React, { useState } from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl";
import styled from "styled-components";
import { colors } from "../../utils/colors";


const languageName = {
  en: "English",
  nb: "Norsk",
  pt: "Portuguese"
}

const LanguageWrapper = styled.div`
  position: relative;
  margin-right: 30px;
  min-width: 120px;
`;

const ToggleLanguage = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  padding: 5px 10px;
  color: #fff;
  cursor: pointer;
  svg {
    width: 30px;
    margin-right: 5px;
  }
`;

const Languages = styled.ul`
  position: absolute;
  top: 50px;
  left: 0;
  width: 100%;
  z-index:4;
  list-style-type: none;
  background-color: ${colors.primary};
  margin: 0;
  padding: 0;

  li {
    margin: 0;
  }
`;

const LanguageLink = styled.a`
  display: flex;
  align-items: center;
  color: #fff;
  margin: 0;
  padding: 5px 10px;
  cursor: pointer;
  svg {
    width: 30px;
    margin-right: 5px;
  }
`;



// const ArrowIcon = () => (
//   <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillrule="evenodd" clipRule="evenodd"><path d="M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z" /></svg>
// )

const NorwegianFlag = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 16"><path fill="#ba0c2f" d="M0 0h22v16H0z" /><g fill="#fff"><path d="M6 0h4v16H6z" /><path d="M0 6h22v4H0z" /></g><g fill="#00205b"><path d="M7 0h2v16H7z" /><path d="M0 7h22v2H0z" /></g></svg>
)

const EnglishFlag = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30"><clipPath id="a"><path d="M0 0v30h60V0z" /></clipPath><clipPath id="b"><path d="M30 15h30v15zv15H0zH0V0zV0h30z" /></clipPath><g clipPath="url(#a)"><path d="M0 0v30h60V0z" fill="#012169" /><path d="M0 0l60 30m0-30L0 30" stroke="#fff" strokeWidth="6" /><path d="M0 0l60 30m0-30L0 30" clipPath="url(#b)" stroke="#C8102E" strokeWidth="4" /><path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10" /><path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="6" /></g></svg>
)

const Flag = styled(NorwegianFlag)`

`;

const Language = () => {
  const [displayLanguages, setDisplayLanguages] = useState(false);
  return (
    <LanguageWrapper>
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) => (
          <>
            <ToggleLanguage onClick={() => setDisplayLanguages(!displayLanguages)}>
              {currentLocale === "nb" ? <Flag /> : <EnglishFlag />}
              {languageName[currentLocale]}
              {/* <ArrowIcon /> */}
            </ToggleLanguage>
            {displayLanguages && (
              <Languages>
                {languages.filter(language => language !== currentLocale).map(language => (
                  <li>
                    <LanguageLink
                      key={language}
                      onClick={() => changeLocale(language)}

                    >

                      {language === "nb" ? <NorwegianFlag /> : <EnglishFlag />}
                      {languageName[language]}
                    </LanguageLink>
                  </li>
                ))}
              </Languages>
            )}
          </>
        )
        }
      </IntlContextConsumer>
    </LanguageWrapper>
  )
}

export default Language