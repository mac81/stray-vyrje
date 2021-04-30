import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { FONT_SIZE, Heading6, StyledText } from "../utils/typography"
import { device } from "../utils/mediaqueries"
import { spacing } from "../utils/spacing";
import { colors } from "../utils/colors"

const PageContainer = styled.div`

    background-color: #f5f5f5;

  @media ${device.laptop} {
    padding: ${spacing.xxlarge} ${spacing.large};
  }
   `;

const PageContent = styled.div`
       width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: ${spacing.large} ${spacing.medium};
    

  @media ${device.laptop} {
    padding: ${spacing.xxlarge} ${spacing.large};
  }
   `;

export const PageTitle = styled.h1`
${StyledText({ fontSize: FONT_SIZE.HEADING_5 })};
text-align: center;
  margin: 0 0 ${spacing.xxlarge} 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: uppercase;
  

  &:after {
    content: "";
    height: 2px;
    width: 100px;
    margin-top: 5px;
    background-color: ${colors.highlight};
  }

  @media ${device.laptop} {
    ${StyledText({ fontSize: FONT_SIZE.HEADING_4 })};
    margin: 0 0 ${spacing.large} 0;
  }
  
`;

export const PageSubTitle = styled.h2`
${StyledText({ fontSize: FONT_SIZE.HEADING_6 })};
text-align: center;
margin: 0 0 ${spacing.xxxlarge} 0;
  
`;


const Page = ({ children }) => {
  return (
    <PageContainer>
      <PageContent>
        {children}
      </PageContent>
    </PageContainer>
  )
}


Page.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Page
