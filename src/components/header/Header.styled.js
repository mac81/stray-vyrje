import styled from "styled-components"
import { colors } from "../../utils/colors"
import { spacing } from "../../utils/spacing";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  height: 80px;
  background-color: ${colors.primary};
  
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
  max-width: 150px;
  margin: 0;
`

export const MenuContainer = styled.div`
  
`
