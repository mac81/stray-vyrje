import styled from 'styled-components';
import { colors } from '../../utils/colors';
import { FONT_SIZE, StyledText } from '../../utils/typography';
import { device } from "../../utils/mediaqueries"

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${colors.highlight};
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: fixed;
  z-index: 3;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
 
      width: 100%;

      /* @media ${device.laptop} {
        width: 50vw;
  } */
 
  a {
    ${StyledText({ fontSize: FONT_SIZE.TEXT })};
    
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${colors.textInverted};
    text-decoration: none;
    transition: color 0.3s linear;

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;