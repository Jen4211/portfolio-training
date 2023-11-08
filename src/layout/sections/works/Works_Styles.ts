import styled from "styled-components";
import {FlexContainer} from "../../../components/FlexContainer";
import {theme} from "../../../styles/Theme";
import {Link} from "../../../components/Link";
import {Button} from "../../../components/Button";

const TabMenu = styled.nav`

  ul {
    display: flex;
    justify-content: space-between;
    max-width: 352px;
    width: 100%;
    margin: 0 auto 40px;
  }


`
const ListItem = styled.li`

`
const Works = styled.section`
  
  ${FlexContainer} {
    gap: 30px;
  }
  position: relative;
`
const Work = styled.div`
  background-color: ${theme.colors.primaryBg};
  
  width: 330px;
  flex-grow: 1;
  

  ${Link} {
    padding: 10px 0;
    
    & + ${Link} {
      margin-left: 20px;
    }
  }
  @media ${theme.media.desktop} {
  max-width: 540px;
}
`
const ImageWorkWrapper = styled.div`
position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.30);
    backdrop-filter: blur(4px);
    opacity: 0;
  }
  
  &:hover{
   &::before {
     opacity: 1;
   } 
    
    ${Button} {
      opacity: 1;
    }
  }
  
  ${Button} {
    opacity: 0;
    position: absolute;
    left:50%;
    top: 50%;
    transform: translate(-50%, -50%);
    
    &::before {
      width: 100%;
      height: 100%;
    }
  }
  
  @media ${theme.media.tablet} {
    &::before {
      opacity: 1;
    }

    ${Button} {
      opacity: 1;
    }
  }
  
`

const CardDescriptionWrapper = styled.div`
padding: 25px 20px;
`

const Image = styled.img`
width: 100%;
  height: 260px;
  object-fit: cover;

`


const Text = styled.p`
    text-align: left;
  margin: 14px 0 10px;
`

const Title = styled.h3`
text-transform: capitalize;
`

export const S = {
    ListItem,
    TabMenu,
    Works,
    Work,
    Title,
    Text,
    Image,
    CardDescriptionWrapper,
    ImageWorkWrapper,
}