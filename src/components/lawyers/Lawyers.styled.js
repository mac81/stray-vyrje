import { Link } from "gatsby";
import styled from "styled-components";
import { colors } from "../../utils/colors";
import { FONT_SIZE, Heading6, StyledText, Heading4 } from "../../utils/typography"
import { device } from "../../utils/mediaqueries"
import { spacing } from "../../utils/spacing";

export const Page = styled.div`
  
  padding: ${spacing.medium};

  @media ${device.laptop} {
    
    width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  }
`;

export const PageTitle = styled(Heading4)`
  text-align: center;
  margin: 0 0 ${spacing.large} 0;
`;

export const PageSubTitle = styled(Heading6)`
  text-align: center;
  margin: 0 0 ${spacing.xxlarge} 0;
`;

export const Cards = styled.div`
display: grid;
grid-row-gap: ${spacing.medium};

@media ${device.mobileL} {
    
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: ${spacing.medium};
    grid-row-gap: ${spacing.medium};
  }

@media ${device.tablet} {
    
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: ${spacing.large};
    grid-row-gap: ${spacing.large};
  }
  @media ${device.laptop} {
    
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: ${spacing.xxxlarge};
    grid-row-gap: ${spacing.xxxlarge};
  }

  @media ${device.laptopL} {
    
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: ${spacing.xxxlarge};
    grid-row-gap: ${spacing.xxxlarge};
  }
`;

export const Card = styled(Link)`
  position: relative;
`;


export const CardName = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  padding: 0 ${spacing.xlarge};
  background-color: ${colors.primary};
  ${StyledText({ fontSize: FONT_SIZE.Text })};
  color: #fff;
`;






