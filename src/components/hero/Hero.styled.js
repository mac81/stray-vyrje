import { Link } from "gatsby";
import styled from "styled-components";
import { colors } from "../../utils/colors";
import { spacing } from "../../utils/spacing";
import { FONT_SIZE, StyledText } from "../../utils/typography"
import { device } from "../../utils/mediaqueries"

export const StyledHero = styled.div`
  position: relative;
  height: 70vh;
  padding: ${spacing.medium};
  display: flex;
  align-items: center;
  background: ${colors.primary};
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSJhHT10TPxXs4_5AXIgPSEJXLxi7spx2k0Q&usqp=CAU");
  background-size: cover;
  background-position: center;

  &:after {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: rgba(33, 37, 50, 0.97);
    z-index: 1;
  }
`;

export const Container = styled.div`
  width: 100%;
  

  @media ${device.tablet} {
    max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${spacing.xxlarge};
  }
`;

export const Card = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
`;

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
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  @media ${device.laptop} {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: ${spacing.xxlarge};
  }
`;

export const Action = styled(Link)`
  color: ${colors.textInverted};
  text-decoration: none;
  padding: 6px 12px;
  text-transform: uppercase;
  border-bottom: 2px solid ${colors.highlight};
  font-weight: 500;
  letter-spacing: 1px;
  ${StyledText({ fontSize: FONT_SIZE.TEXT })};
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

