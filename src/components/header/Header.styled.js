import styled from "styled-components"
import { colors } from "../../utils/colors"
import { spacing } from "../../utils/spacing";

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  height: 80px;
  background-color: ${colors.primary};
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  
  padding: ${spacing.medium};
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  position: relative;
`;

export const Logo = styled.img`
  float: left;
  max-width: 120px;
  margin: 0;
`

export const MenuContainer = styled.div`
  
`
