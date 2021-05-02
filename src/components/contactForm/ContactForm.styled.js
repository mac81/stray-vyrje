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
cursor: pointer;
  border: none;
  border-radius: 5px;
  padding: ${spacing.xsmall} ${spacing.xlarge};
  background-color: ${colors.highlight};
  color: #fff;
  font-weight: 600;
    text-transform: uppercase;
  
  @media ${device.laptop} {
    padding: ${spacing.small} ${spacing.xxlarge};
  }
`;