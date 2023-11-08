import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import {S} from "../Skills_Styles";
import {FlexContainer} from "../../../../components/FlexContainer";



type SkillPropsType = {
    iconId: string
    title: string
    description:string
}
export const Skill: React.FC<SkillPropsType> = (props:SkillPropsType) => {
        return (
            <S.Skill>
                <FlexContainer direction={"column"} align={"center"}>
                    <S.IconWrapper>
                        <Icon iconId={props.iconId}/>
                    </S.IconWrapper>

                    <S.SkillTitle>{props.title}</S.SkillTitle>
                    <S.SkillText>{props.description}</S.SkillText>
                </FlexContainer>

            </S.Skill>
        );

}


