import styled from "styled-components"
import { colors } from "../../utils/colors";
import { spacing } from "../../utils/spacing";
import { FONT_SIZE, FONT_WEIGHT, Text, StyledText } from "../../utils/typography";

export const StyledFooter = styled.footer`
  background-color: ${colors.secondary};
  padding: ${spacing.xlarge} ${spacing.medium};
  
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: 15px;
`

export const Section = styled.div`

`

export const SectionTitle = styled(Text)`
  font-weight: ${FONT_WEIGHT.MEDIUM};
  color: ${colors.textInverted};
`

export const SectionContent = styled.div`
${StyledText({ fontSize: FONT_SIZE.SMALL })};
  color: ${colors.textInverted};
`

export const Logo = styled.img`
  max-width: 200px;
  margin: 0;
`