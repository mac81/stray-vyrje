import styled from 'styled-components';
import { device } from '../../utils/mediaqueries';
import { spacing } from '../../utils/spacing';

export const StyledBurger = styled.button`
  position: absolute;
  top: -2px;
  right: ${spacing.medium};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  outline: none;
  span {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => open ? "#fff" : "#FFF"};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }
    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
  
  @media ${device.laptop} {
    right: ${spacing.xxlarge};
    top: -2px;
  }
`;