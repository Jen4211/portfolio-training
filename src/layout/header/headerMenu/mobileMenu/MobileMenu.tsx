
import {S} from "../HeaderMenu_Styles";
import React, {useState} from "react";
import {Menu} from "../menu/Menu";

export const MobileMenu: React.FC<{ menuItems: Array<string> }> = (props: { menuItems: Array<string> }) => {
    const [isOpen, setIsOpen] = useState(false)

    const onToggle = () => setIsOpen(prev => !prev)


    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={isOpen}
                          onClick={onToggle}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopup isOpen={isOpen}>
                <Menu menuItems={props.menuItems}/>
            </S.MobileMenuPopup>

        </S.MobileMenu>
    );
};




