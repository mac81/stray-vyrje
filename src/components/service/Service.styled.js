import styled from "styled-components";
import { Link } from 'gatsby';
import { colors } from "../../utils/colors";
import { Heading5 } from "../../utils/typography";

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(90deg, rgba(239,239,239,1) 0%, rgba(239,239,239,1) 50%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%);
`;

export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 6fr;
`;

export const Sidebar = styled.div`
  min-height: calc(100vh - 200px);
`;

export const Content = styled.div`
  background-color: #fff;
  padding: 30px 60px;
`;

export const Excerpt = styled.div`
 font-weight: 600;
`;

export const MenuItem = styled(Link)`
  
`;

export const ServicesMenuTitle = styled(Heading5)`
  text-transform: uppercase;
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