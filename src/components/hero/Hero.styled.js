import { Link } from "gatsby";
import styled from "styled-components";
import { colors } from "../../utils/colors";
import { spacing } from "../../utils/spacing";
import { Heading3 } from "../../utils/typography"

export const StyledHero = styled.div`
  height: 60vh;
  padding: ${spacing.medium};
  display: flex;
  align-items: center;
  background: ${colors.primary};
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
`;

export const Card = styled.div`
  /* max-width: 50vw; */
`;

export const Title = styled(Heading3)`
 color: ${colors.textInverted};
`;

export const Actions = styled.div`
  display: flex;
`;

export const Action = styled(Link)`
  color: ${colors.textInverted};
  text-decoration: none;
  padding: 6px 12px;
  text-transform: uppercase;
  border-bottom: 2px solid ${colors.highlight};
  font-weight: 500;
  letter-spacing: 2px;
  font-family: "Roboto";
  margin-right: 30px;
`;

