import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {font} from "../../styles/Common";

const Footer = styled.footer`
  background-color: ${theme.colors.primaryBg};
  padding: 40px 0;

`

const Name = styled.span`
  ${font({
    family: "'Josefin Sans', sans-serif",
    weight: 700,
    fontMax: 22,
    fontMin: 16
})}
  
  letter-spacing: 3px;



`
const SocialList = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 30px 0;
`
const SocialItem = styled.li`
  position: relative;

  &::after {
    content: "";
    display: inline-block;

    position: absolute;
    bottom: -5px;
    left: 0;
    right: 0;
    background-color: ${theme.colors.accent};
    z-index: -1;
  }

  &:hover {
    transform: translateY(-4px);

    &::after {
      height: 10px;
    }
  }
`

const SocialIconLink = styled.a`

`

const Copyright = styled.small`
  opacity: 0.5;
  font-size: 12px;
  font-weight: 400;
`

export const S = {
    Footer,
    Copyright,
    SocialIconLink,
    SocialItem,
    SocialList,
    Name,
}