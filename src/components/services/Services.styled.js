import { Link } from "gatsby";
import styled from "styled-components";
import { colors } from "../../utils/colors";
import { FONT_SIZE, FONT_WEIGHT, Heading6, Heading5, StyledText, Text } from "../../utils/typography"
import Test from "../../icons/science.svg"

export const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 60px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 60px;
  justify-items: center;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardIcon = styled(Test)`
  width: 100px;
  margin: 0 0 38px 0;
`;

export const CardTitle = styled(Heading6)`
  text-transform: uppercase;
  margin: 0 0 22px 0;
  color: #454545;
`;

export const CardSummary = styled(Text)`
  text-align: center;
  margin: 0 0 22px 0;
  padding: 15px;
  color: #555;
`;

export const CardLink = styled(Link)`
  text-align: center;
  text-transform: uppercase;
  color: inherit;
  text-decoration: none;
  ${StyledText({ fontSize: FONT_SIZE.SMALL, fontWeight: FONT_WEIGHT.MEDIUM })};
`;



