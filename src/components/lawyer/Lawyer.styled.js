import styled from "styled-components";
import { Link } from 'gatsby';

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
  
`;

export const Content = styled.div`
  background-color: #fff;
  padding: 0px 60px;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MenuItem = styled(Link)`
  
`;