import React from 'react';
import {S} from "./Footer_Styles"
import {Icon} from "../../components/icon/Icon";
import {FlexContainer} from "../../components/FlexContainer";


const socialItemsData = [
    {iconId: "telegram", viewBox: "0 0 500 500"},
    {iconId: "github", viewBox: "0 0 48 48"},
    {iconId: "linkedin", viewBox: "4 4 40 40"},
]

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <FlexContainer direction={"column"} align={"center"}>
                <S.Name>Evgeniy</S.Name>
                <S.SocialList>
                    {socialItemsData.map((s, index) => {
                        return <S.SocialItem key={index}>
                            <S.SocialIconLink>
                                <Icon iconId={s.iconId} viewBox={s.viewBox}/>
                            </S.SocialIconLink>
                        </S.SocialItem>
                    })}
                </S.SocialList>
                <S.Copyright>© 2023 Evgeniy Huletskiy</S.Copyright>
            </FlexContainer>

        </S.Footer>
    );
};


