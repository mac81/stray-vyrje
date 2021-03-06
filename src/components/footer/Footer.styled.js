import styled from "styled-components"
import { colors } from "../../utils/colors"
import { spacing } from "../../utils/spacing"
import { FONT_SIZE, FONT_WEIGHT, StyledText } from "../../utils/typography"
import { device } from "../../utils/mediaqueries"

export const StyledFooter = styled.footer`
  background-color: ${colors.secondary};
  padding: ${spacing.xlarge} ${spacing.medium} 0;
  @media ${device.laptop} {
    padding: ${spacing.xxxlarge} 0 ${spacing.medium} 0;
  }
`

export const Container = styled.div`
  display: flex;
  /* flex-direction: column-reverse; */

  @media ${device.laptop} {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    /* display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 100px; */
    padding: 0 ${spacing.xxlarge};
  }
`

export const Section = styled.div`
  margin-bottom: ${spacing.xxlarge};

  /* &:first-child {
    margin: 0;
  } */
  p {
    color: ${colors.textInverted};
    ${StyledText({ fontSize: FONT_SIZE.SMALL })};
    margin-bottom: 0;
  }
`

export const SectionTitle = styled.h3`
  ${StyledText({ fontSize: FONT_SIZE.HEADING_5 })};
  font-weight: ${FONT_WEIGHT.MEDIUM};
  color: ${colors.textInverted};
  margin: 0 0 ${spacing.medium} 0;
`

export const SectionExcerpt = styled.p`
  ${StyledText({ fontSize: FONT_SIZE.TEXT })};
  font-weight: ${FONT_WEIGHT.MEDIUM};
  color: ${colors.textInverted};
`

export const SectionContent = styled.div`
  ${StyledText({ fontSize: FONT_SIZE.SMALL })};
  color: ${colors.textInverted};
`

export const Logo = styled.img`
  max-width: 120px;
  margin: 0;
`

export const InputWrapper = styled.div``

export const Input = styled.input`
  width: 100%;
  background-color: #fff;
  border-radius: 5px;
  padding: ${spacing.xsmall};

  margin: 0 0 20px 0;
  border-style: solid;
  border-width: 1px;
  border-color: transparent;

  @media ${device.laptop} {
    padding: ${spacing.medium};
  }

  &:focus {
    border-color: #e6e6e6;
    outline: none;
  }
`

export const Textarea = styled.textarea`
  width: 100%;
  background-color: #fff;
  border-radius: 5px;
  padding: ${spacing.medium};

  margin: 0 0 20px 0;
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  resize: vertical;

  &:focus {
    border-color: #e6e6e6;
    outline: none;
  }
`

export const Button = styled.button`
  border: none;
  border-radius: 5px;
  padding: ${spacing.xsmall} ${spacing.xlarge};
  background-color: ${colors.highlight};
  color: ${colors.textInverted};
  font-weight: 600;
  text-transform: uppercase;

  @media ${device.laptop} {
    padding: ${spacing.small} ${spacing.xlarge};
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  color: ${colors.textInverted};
  ${StyledText({ fontSize: FONT_SIZE.SMALL })};

  > div {
    /* display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center; */

    span {
      padding: 0 10px;
    }

    span:first-child {
      padding: 0 10px 0 0;
    }

    a {
      /* display: flex;
      align-items: center;
      justify-content: center; */
      margin: 0 10px;
    }
  }

  img {
    margin: 20px 0;
    max-width: 200px;
    max-height: 60px;

    @media ${device.laptop} {
      margin: 0;
    }
  }

  @media ${device.laptop} {
    flex-direction: row;
    text-align: left;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 ${spacing.xxlarge};
  }
`

export const Bar = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  flex-direction: column;

  @media ${device.laptop} {
    flex-direction: row;

    span:after {
      content: "|";
      padding-left: 10px;
    }
  }
`

export const Logos = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
`
