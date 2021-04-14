import { Link } from "gatsby";
import styled from "styled-components";
import { colors } from "../../utils/colors";
import { spacing } from "../../utils/spacing";
import { Heading3 } from "../../utils/typography"

export const StyledHero = styled.div`
  position: relative;
  height: 80vh;
  padding: ${spacing.medium};
  display: flex;
  align-items: center;
  background: ${colors.primary};
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSJhHT10TPxXs4_5AXIgPSEJXLxi7spx2k0Q&usqp=CAU");
  background-size: cover;

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
  max-width: 1280px;
  margin: 0 auto;
`;

export const Card = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
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

