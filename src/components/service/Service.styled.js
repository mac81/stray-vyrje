import styled from "styled-components";
import { Link } from 'gatsby';
import { colors } from "../../utils/colors";
import { StyledText, FONT_SIZE } from "../../utils/typography";
import { spacing } from "../../utils/spacing";
import { device } from "../../utils/mediaqueries";

export const Wrapper = styled.div`
  height: 100%;
  

  @media ${device.laptop} {
    background: linear-gradient(90deg, rgba(239,239,239,1) 0%, rgba(239,239,239,1) 50%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;

  @media ${device.laptop} {
    max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 6fr;
  }
`;

export const Sidebar = styled.div`
padding: ${spacing.xxlarge};
 @media ${device.laptop} {
  min-height: calc(100vh - 200px);
  
  }

`;

export const Content = styled.div`
  padding: ${spacing.medium};
  /* 
  padding: 30px 60px; */
  @media ${device.laptop} {
    background-color: #fff;
    padding: ${spacing.xxlarge};
  }
`;

export const PrimaryTitle = styled.h1`
  ${StyledText({ fontSize: FONT_SIZE.HEADING_3 })};
  line-height: 1;
  margin: 0 0 ${spacing.medium};

  @media ${device.laptop} {
  font-size: ${FONT_SIZE.HEADING_2};
  margin: 0 0 ${spacing.xlarge};
  }
`;

export const SecondaryTitle = styled.h2`
  ${StyledText({ fontSize: FONT_SIZE.HEADING_5 })};
  margin: 0 0 ${spacing.xlarge};
`;

export const Excerpt = styled.div`
${StyledText({ fontSize: FONT_SIZE.TEXT })};
 font-weight: 600;
`;

export const MenuItem = styled(Link)`
  
`;

export const ServicesMenuTitle = styled.h3`
 ${StyledText({ fontSize: FONT_SIZE.HEADING_5 })};
  text-transform: uppercase;
  margin: 0 0 ${spacing.xlarge};
`;

export const ServicesMenu = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;

`;

export const ServiceLink = styled(Link)`

    padding-left: 10px;
    border-left-width: 3px;
    border-left-style: solid;
    color: ${colors.text};
    text-decoration: none;
    border-left-color: ${props => props.$active ? colors.highlight : colors.text};

    &:hover {
      color: ${colors.highlight};
      border-color: ${colors.highlight};
    }
  
`;

export const Lawyers = styled.div`
      display: grid;
grid-template-columns: 1fr;
  grid-row-gap: ${spacing.xlarge};

  @media ${device.laptop} {
    display: grid;
grid-template-columns: repeat(3, 1fr);
  grid-column-gap: ${spacing.xxlarge};
  }
`;