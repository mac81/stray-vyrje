import { Link } from "gatsby"
import styled from "styled-components"
import { colors } from "../../utils/colors"
import {
  FONT_SIZE,
  Heading6,
  StyledText,
  Heading4,
} from "../../utils/typography"
import { device } from "../../utils/mediaqueries"
import { spacing } from "../../utils/spacing"

export const Page = styled.div`
  padding: ${spacing.medium};

  @media ${device.laptop} {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
  }
`

export const PageTitle = styled(Heading4)`
  text-align: center;
  margin: 0 0 ${spacing.large} 0;
`

export const PageSubTitle = styled(Heading6)`
  text-align: center;
  margin: 0 0 ${spacing.xxlarge} 0;
`

export const Cards = styled.div`
  display: grid;
  grid-row-gap: ${spacing.medium};

  @media ${device.mobileL} {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: ${spacing.medium};
    grid-row-gap: ${spacing.medium};
  }

  @media ${device.tablet} {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: ${spacing.large};
    grid-row-gap: ${spacing.large};
  }
  @media ${device.laptop} {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: ${spacing.xxxlarge};
    grid-row-gap: ${spacing.xxxlarge};
  }

  @media ${device.laptopL} {
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: ${spacing.xxxlarge};
    grid-row-gap: ${spacing.xxxlarge};
  }
`

export const Card = styled(Link)`
  position: relative;

  &:hover {
    .card-content {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
      &:before {
        transform: translate3d(0, 0, 0);
      }
      &:after {
        transform: translate3d(0, 0, 0);
      }
    }
  }
`

export const CardContent = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${spacing.medium} ${spacing.large};
  background-color: ${colors.secondary};
  overflow: hidden;

  &:before {
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: ${colors.highlight};
    transform: translate3d(-100%, 100%, 0);
    transition: all 800ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }

  &:after {
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: ${colors.highlight};
    transform: translate3d(100%, -100%, 0);
    transition: all 800ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
`

export const CardName = styled.div`
  ${StyledText({ fontSize: FONT_SIZE.TEXT })};
  font-weight: 600;
  color: ${colors.textInverted};
  position: relative;
  z-index: 2;
`

export const CardInfo = styled.div`
  ${StyledText({ fontSize: FONT_SIZE.SMALL })};
  color: ${colors.textInvertedOp2};
  position: relative;
  z-index: 2;
`
