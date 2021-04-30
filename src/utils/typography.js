import styled, { css } from "styled-components";

export const HEADER_FONT_FAMILY = "Roboto";
export const BODY_FONT_FAMILY = "Gudea";

export const FONT_SIZE = {
  HEADING_1: "3.052rem",
  HEADING_2: "2.441rem",
  HEADING_3: "1.953rem",
  HEADING_4: "1.563rem",
  HEADING_5: "1.25rem",
  HEADING_6: "1.1rem",
  TEXT: "1rem",
  SMALL: "0.8rem"
};

export const FONT_WEIGHT = {
  THIN: 100,
  LIGHT: 300,
  NORMAL: 400,
  MEDIUM: 500,
  SEMI_BOLD: 600,
  BOLD: 700,
};

export const StyledText = ({
  fontFamily = BODY_FONT_FAMILY,
  fontSize = FONT_SIZE.TEXT,
  fontWeight = FONT_WEIGHT.NORMAL,
  lineHeight = 1.6,
}) => css`
  font-family: ${fontFamily};
  font-size: ${fontSize};
  font-weight: ${fontWeight};
  line-height: ${lineHeight};
  text-rendering: optimizeLegibility;
`;

export const Heading1 = styled.h1`

  margin: 0 0 1.38rem;
  ${StyledText({ fontFamily: HEADER_FONT_FAMILY, fontSize: FONT_SIZE.HEADING_1 })};
`;

export const Heading2 = styled.h2`
  margin: 3rem 0 1.38rem;
  ${StyledText({ fontFamily: HEADER_FONT_FAMILY, fontSize: FONT_SIZE.HEADING_2 })};
`;

export const Heading3 = styled.h3`
  margin: 3rem 0 1.38rem;
  ${StyledText({ fontFamily: HEADER_FONT_FAMILY, fontSize: FONT_SIZE.HEADING_3 })};
`;

export const Heading4 = styled.h4`
  margin: 3rem 0 1.38rem;
  ${StyledText({ fontFamily: HEADER_FONT_FAMILY, fontSize: FONT_SIZE.HEADING_4 })};
`;

export const Heading5 = styled.h5`
  margin: 2rem 0 1.38rem;
  ${StyledText({ fontFamily: HEADER_FONT_FAMILY, fontSize: FONT_SIZE.HEADING_5 })};
`;

export const Heading6 = styled.h5`
  margin: 2rem 0 1.38rem;
  ${StyledText({ fontFamily: HEADER_FONT_FAMILY, fontSize: FONT_SIZE.HEADING_6, fontWeight: FONT_WEIGHT.SEMI_BOLD })};
`;

export const Text = styled.span`
margin: 0.5rem 0 1.38rem;
  ${StyledText};
`;