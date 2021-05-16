import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { FONT_SIZE, StyledText } from "../utils/typography"
import { device } from "../utils/mediaqueries"
import { spacing } from "../utils/spacing"
import { colors } from "../utils/colors"

const StyledPage = styled.div`
  background-color: #f5f5f5;
  padding: ${spacing.large} 0 0 0;

  @media ${device.laptop} {
    padding: ${spacing.xxxlarge} 0 0 0;
    min-height: 60vh;
  }
`

const StyledPageContent = styled.div`
  width: 100%;
  padding: ${spacing.large} ${spacing.medium};

  @media ${device.laptop} {
    max-width: 1280px;
    margin: 0 auto;
    padding: ${spacing.xxlarge} ${spacing.xxlarge};
  }
`

export const PageHeader = styled.div`
  padding: 0 ${spacing.medium};
  margin: 0 0 ${spacing.xlarge} 0;
`

export const PageTitle = styled.h1`
  ${StyledText({ fontSize: FONT_SIZE.HEADING_5 })};
  color: ${colors.text};
  text-align: center;
  margin: 0 0 ${spacing.large} 0;
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
`

export const PageSubTitle = styled.h2`
  ${StyledText({ fontSize: FONT_SIZE.HEADING_6 })};
  color: ${colors.textOp1};
  text-align: center;
`

const Page = ({ children }) => {
  return <StyledPage>{children}</StyledPage>
}

export const PageContent = ({ children }) => {
  return <StyledPageContent>{children}</StyledPageContent>
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Page
