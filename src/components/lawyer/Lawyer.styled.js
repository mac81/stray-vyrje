import styled from "styled-components"
import { Link } from "gatsby"
import { spacing } from "../../utils/spacing"
import { colors } from "../../utils/colors"
import { device } from "../../utils/mediaqueries"
import { FONT_SIZE, StyledText } from "../../utils/typography"

export const Wrapper = styled.div`
  height: 100%;

  @media ${device.laptop} {
    background: linear-gradient(
      90deg,
      rgba(239, 239, 239, 1) 0%,
      rgba(239, 239, 239, 1) 50%,
      rgba(255, 255, 255, 1) 50%,
      rgba(255, 255, 255, 1) 100%
    );
  }
`

export const Container = styled.div`
  @media ${device.laptop} {
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 3fr 8fr;
  }
`

export const Sidebar = styled.div`
  padding: ${spacing.medium};

  @media ${device.laptop} {
    padding: ${spacing.xxlarge};
  }
`

export const Profile = styled.div`
  display: flex;
  align-items: center;

  @media ${device.laptop} {
    align-items: flex-start;
    flex-direction: column;
  }
`

export const ProfileImage = styled.div`
  width: 140px;
  margin-right: ${spacing.medium};

  @media ${device.tablet} {
    width: 250px;
    margin-right: ${spacing.xxlarge};
  }

  @media ${device.laptop} {
    width: 100%;
    margin: 0 0 ${spacing.large} 0;
  }
`

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const ProfileName = styled.h1`
${StyledText({ fontSize: FONT_SIZE.HEADING_5 })};
  margin: 0;
`

export const ProfileType = styled.div`
  ${StyledText({ fontSize: FONT_SIZE.SMALL })};
  text-transform: uppercase;
  color: ${colors.textOp2};

  span {
    &:after {
    content: ", ";
    }

    &:last-child:after {
      content: ""
    }
  }
`

export const ProfileInfo = styled.dl`
  display: grid;
  grid-template-columns: max-content auto;
  grid-column-gap: 5px;
  padding: ${spacing.medium} 0;
  ${StyledText({ fontSize: FONT_SIZE.TEXT })};

  dd {
    margin: 0;
  }
`

export const Content = styled.div`
  background-color: #fff;
  padding: ${spacing.medium};

  @media ${device.laptop} {
    padding: ${spacing.xxlarge};
  }
`

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
`

export const MenuItem = styled(Link)``
