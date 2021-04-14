import { Link } from "gatsby";
import styled from "styled-components";
import { colors } from "../../utils/colors";
import { FONT_SIZE, StyledText } from "../../utils/typography"
import { device } from "../../utils/mediaqueries"
import { spacing } from "../../utils/spacing";

export const Card = styled(Link)`
  position: relative;
`;


export const CardName = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  padding: ${spacing.large} ${spacing.medium};
  background-color: ${colors.primary};
  ${StyledText({ fontSize: FONT_SIZE.Text })};
  color: #fff;
`;