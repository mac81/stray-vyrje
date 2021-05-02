import { Link } from "gatsby";
import styled from "styled-components";
import { colors } from "../../utils/colors";
import { FONT_SIZE, StyledText } from "../../utils/typography"
import { spacing } from "../../utils/spacing";

export const Card = styled(Link)`
  position: relative;
`

export const CardContent = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${spacing.medium} ${spacing.large};
  background-color: ${colors.primary};
`

export const CardName = styled.div`
  ${StyledText({ fontSize: FONT_SIZE.TEXT })};
  font-weight: 600;
  color: ${colors.textInverted};
`

export const CardInfo = styled.div`
  ${StyledText({ fontSize: FONT_SIZE.SMALL })};
  color: ${colors.textInvertedOp2};
`