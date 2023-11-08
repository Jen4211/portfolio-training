
import {Logo} from "../../components/logo/Logo";
import {FlexContainer} from "../../components/FlexContainer";
import {Container} from "../../components/Container";
import {DesktopMenu} from "./headerMenu/desktopMenu/DesktopMenu";
import {MobileMenu} from "./headerMenu/mobileMenu/MobileMenu";
import React from "react";
import {S} from "./Heder_Styles"


const items = [
    "Home",
    "About me",
    "Skills",
    "Works",
    "Contact"
]

export const Header: React.FC = () => {

    const [width, setWidth] =  React.useState(window.innerWidth);
    const breakpoint = 768;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, [])

    return (
        <S.Header>
            <Container>
                <FlexContainer justify={"space-between"} align={"center"}>
                    <Logo/>
                    {width < breakpoint ? <MobileMenu menuItems={items}/>
                                        : <DesktopMenu menuItems={items}/>}


                </FlexContainer>
            </Container>

        </S.Header>
    )
}

