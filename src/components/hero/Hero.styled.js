import { Link } from "gatsby"
import styled from "styled-components"
import { colors } from "../../utils/colors"
import { spacing } from "../../utils/spacing"
import { FONT_SIZE, StyledText } from "../../utils/typography"
import { device } from "../../utils/mediaqueries"
import { linearGradient, rgba } from "polished"
import backgroundImage from "../../images/oaktree.jpg"

export const StyledHero = styled.div`
  position: relative;
  height: 90vh;

  background: ${colors.primary};
  background-image: ${`url(${backgroundImage})`};
  background-size: cover;
  background-position: center;

  &:after {
    content: "";
    position: absolute;
    z-index: 1;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: rgba(33, 37, 50, 0.85);
    background: ${linearGradient({
      colorStops: [
        `${rgba(colors.primary, 0.5)} 0%`,
        `${rgba(colors.secondary, 0.5)} 60%`,
        `${rgba(colors.secondary, 0.9)} 100%`,
      ],
      toDirection: "to bottom right",
      fallback: colors.secondary,
    })};
  }
`

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: ${spacing.medium};
  display: flex;
  align-items: center;

  @media ${device.tablet} {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 ${spacing.xxlarge};
  }
`

export const Card = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  text-align: center;

  @media ${device.laptop} {
    text-align: left;
  }
`

export const Logo = styled.img`
  max-width: 140px;

  @media ${device.laptop} {
    max-width: 200px;
  }
`

export const Title = styled.h1`
  ${StyledText({ fontSize: FONT_SIZE.HEADING_6 })};
  color: ${colors.textInverted};
  text-align: center;

  @media ${device.tablet} {
    font-size: ${FONT_SIZE.HEADING_4};
  }

  @media ${device.laptop} {
    text-align: left;
    font-size: ${FONT_SIZE.HEADING_4};
  }
`

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  @media ${device.laptop} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: ${spacing.xxlarge};
  }
`

export const Action = styled(Link)`
  ${StyledText({ fontSize: FONT_SIZE.TEXT })};
  color: ${colors.textInverted};
  text-decoration: none;
  padding: 6px 12px;
  border-bottom: 2px solid ${colors.highlight};
  display: flex;
  justify-content: center;
  font-weight: 500;
  letter-spacing: 1px;
  justify-content: center;
  margin: 5px 5px 20px 5px;

  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgb(0 0 0 / 0%);
  position: relative;

  transition-property: color;

  transition-duration: 0.3s;

  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${colors.highlight};

    transform: scaleY(0);
    transform-origin: 50% 100%;
    transition-property: transform;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
  }

  &:hover:before {
    transform: scaleY(1);
  }

  @media ${device.laptop} {
    margin: 0;
    font-size: ${FONT_SIZE.HEADING_6};
  }
`
