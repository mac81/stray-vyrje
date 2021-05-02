import styled from "styled-components"
import { spacing } from "../../utils/spacing";
import { colors } from "../../utils/colors";
import { device } from "../../utils/mediaqueries"

export const Form = styled.form`
  
`;

export const Input = styled.input`
  width: 100%;
  background-color: #fff;
  border-radius: 5px;
  padding: ${spacing.xsmall};
  
  margin: 0 0 20px 0;
  border-style: solid;
  border-width: 1px;
  border-color: transparent;

  @media ${device.laptop} {
    padding: ${spacing.medium};
  }

  &:focus {
    border-color: #e6e6e6;
    outline: none;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  background-color: #fff;
  border-radius: 5px;
  padding: ${spacing.medium};
  
  margin: 0 0 20px 0;
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  resize:vertical;

  &:focus {
    border-color: #e6e6e6;
    outline: none;
  }
`;

export const Button = styled.button`
/* cursor: pointer;
  border: none;
  border-radius: 5px;
  padding: ${spacing.xsmall} ${spacing.xlarge};
  background-color: ${colors.highlight};
  color: #fff;
  font-weight: 600;
    text-transform: uppercase;
  
  @media ${device.laptop} {
    padding: ${spacing.small} ${spacing.xxlarge};
  } */

  display: inline-block;
    vertical-align: middle;
    
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgb(0 0 0 / 0%);
    position: relative;
    overflow: hidden;
    background: ${colors.highlight};
    border: none;
    transition-property: color;
    transition-duration: 0.3s;
    border-radius: 5px;
    color: #fff;
  font-weight: 600;
  cursor: pointer;
    text-transform: uppercase;
    padding: ${spacing.xsmall} ${spacing.xlarge};

  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${colors.primary};
    border-radius: 100%;
    -webkit-transform: scale(0);
    transform: scale(0);
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }

  &:hover:before {
    transform: scale(2);
  }

`;