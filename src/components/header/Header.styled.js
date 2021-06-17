import styled from "styled-components"
import { colors } from "../../utils/colors"
import { spacing } from "../../utils/spacing"
import { device } from "../../utils/mediaqueries"

export const StyledHeader = styled.header`
  position: relative;
  top: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  height: 60px;
  background-color: ${props => props.$displayBackground && colors.secondary};
  box-shadow: ${props =>
    props.$displayBackground &&
    "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)"};

  @media ${device.laptop} {
    height: 80px;
  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  position: relative;
  padding: 0 ${spacing.medium};
  @media ${device.laptop} {
    padding: 0 ${spacing.xxlarge};
  }
`

export const Logo = styled.img`
  float: left;
  max-width: 120px;
  margin: 0;
`

export const MenuContainer = styled.div``
