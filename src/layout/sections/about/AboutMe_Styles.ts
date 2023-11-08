import styled from "styled-components";
import {FlexContainer} from "../../../components/FlexContainer";
import {theme} from "../../../styles/Theme";

const AboutMeText = styled.p`
text-indent: 15px;

`

const AboutMe = styled.section`
 ${FlexContainer} {
   @media ${theme.media.tablet} {
     justify-content: center;
     flex-wrap: wrap;
     gap: 20px;
   }
 }
  position: relative;
`

export const S = {
    AboutMeText,
    AboutMe
}