import styled from "styled-components";
import {font} from "../../../styles/Common";
import {theme} from "../../../styles/Theme";

const Main = styled.section`
  min-height: 100vh;
  display: flex;
`
const MainTitle = styled.h1`
  ${font({ weight: 400, fontMax: 27, fontMin: 20})};
  
  p {
    display: none;
  }
  
`
const Name = styled.h2`
  ${font({family: "'Josefin Sans', sans-serif", weight: 700, fontMax: 50, fontMin: 32})}
  letter-spacing: 2.5px;
  
 

  span {
    position: relative;
    z-index: 1;
    white-space: nowrap;

    &::before {
      content: "";
      display: inline-block;
      width: 100%;
      height: 20px;
      background-color: ${theme.colors.accent};
      position: absolute;
      bottom: 0;
      z-index: -1;
    }
  }

  @media ${theme.media.mobile} {
  margin: 15px 0 22px;
}
  
`
const SmallText = styled.span`
  font-size: 14px;
  font-weight: 400;

`

const PhotoWrapper = styled.div`
position: relative;
  z-index: 0;
  margin-top: 65px;
  
  &::before {
    content: "";
    width: 360px;
    height: 470px;
    border: 5px solid ${theme.colors.accent};
    position: absolute;
    top: -24px;
    left: 24px;
    z-index: -1;
    
    @media ${theme.media.mobile} {
      width: 314px;
      height: 414px;
      top: -17px;
      left: 20px;
    }
    
  }
`
export const S = {
    Main,
    MainTitle,
    Name,
    SmallText,
    PhotoWrapper
}