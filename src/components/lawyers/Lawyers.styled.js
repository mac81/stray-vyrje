import { Link } from "gatsby";
import styled from "styled-components";
import { colors } from "../../utils/colors";
import { FONT_SIZE, FONT_WEIGHT, Heading6, Heading5, StyledText, Text, Heading4 } from "../../utils/typography"
import Test from "../../icons/science.svg"
import { device } from "../../utils/mediaqueries"

export const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  /* padding: 60px 0; */
  padding: 24px 12px;
  
`;

export const PageTitle = styled(Heading4)`
  text-align: center;
  margin: 0 0 12px 0;
`;


export const PageSubTitle = styled(Heading6)`
  text-align: center;
  margin: 0 0 24px 0;
`;


export const Cards = styled.div`




  @media ${device.laptop} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 120px;
  grid-row-gap: 60px;
    }
  
`;

export const Card = styled(Link)`
  position: relative;
`;


export const CardName = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  padding: 0 30px;
  background-color: ${colors.primary};
  ${StyledText({ fontSize: FONT_SIZE.Text })};
  color: #fff;
`;






