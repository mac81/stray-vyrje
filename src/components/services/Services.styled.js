import { Link } from "gatsby"
import styled from "styled-components"
import {
  FONT_SIZE,
  FONT_WEIGHT,
  Heading4,
  Heading6,
  StyledText,
  Text,
} from "../../utils/typography"
import { device } from "../../utils/mediaqueries"
import { spacing } from "../../utils/spacing"
import { colors } from "../../utils/colors"
import { rgba } from "polished"

export const Page = styled.div`
  background-color: rgba(239, 239, 239, 1);
  padding: ${spacing.large} ${spacing.medium};

  @media ${device.laptop} {
    padding: ${spacing.xxlarge} ${spacing.large};
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

export const Container = styled.div`
  display: grid;
  grid-row-gap: ${spacing.large};

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: ${spacing.large};
  }

  @media ${device.laptopL} {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;

    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: ${spacing.xxlarge};
    grid-row-gap: ${spacing.xxlarge};
    justify-items: center;
  }
`

export const Card = styled(Link)`
  width: 100%;
  min-height: 300px;
  background-color: ${colors.secondary};
  /* background: ${`linear-gradient(135deg, ${rgba(
    colors.primary,
    1
  )} 0%, ${rgba(colors.secondary, 1)} 100%)`}; */

  border-radius: ${spacing.xxsmall};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  color: inherit;
  text-decoration: none;
  position: relative;
  overflow: hidden;

  > div {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: ${spacing.large};
    height: 100%;
    width: 100%;
  }

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    &:before {
      transform: translate3d(0, 0, 0);
    }
    &:after {
      transform: translate3d(0, 0, 0);
    }
  }

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

  /* img {
      
      animation-name: spin;
    animation-duration: 300ms;
    animation-iteration-count: 1;
    animation-timing-function: linear;
    } */

  /* @keyframes spin { 
        from { 
            transform: rotate(0deg); 
        } to { 
            transform: rotate(360deg); 
        }
    } */
`

export const CardIcon = styled.div`
  width: 70px;
  border: 2px solid #fff;
  padding: 10px;
  border-radius: 50%;
  margin: 0 0 ${spacing.large} 0;
  transition: all 1s ease-out;
`

export const CardTitle = styled(Heading6)`
  text-transform: uppercase;
  margin: 0 0 ${spacing.large} 0;
  color: ${colors.textInverted};
  font-weight: 500;
  text-align: center;
`

export const CardSummary = styled(Text)`
  text-align: center;
  /* margin: 0 0 ${spacing.large} 0; */
  color: ${colors.textInvertedOp1};

  p {
    margin: 0;
  }
`

export const CardLink = styled.div`
  text-align: center;
  text-transform: uppercase;

  ${StyledText({ fontSize: FONT_SIZE.SMALL, fontWeight: FONT_WEIGHT.MEDIUM })};
`
