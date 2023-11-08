import React from 'react';
import {FlexContainer} from "../../../components/FlexContainer";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";
import {S} from "./Skills_Styles";

const skillData = [
    {iconId:"code", title: "Html5", description: "basic"},
    {iconId:"css", title: "Css3", description: "basic"},
    {iconId:"react", title: "React", description: "basic"},
    {iconId:"styledComponents", title: "styled components", description: "basic"},
    {iconId:"typescript", title: "Type Script", description: "basic"},
    {iconId:"figma", title: "Figma", description: "basic"},
]

export const Skills: React.FC = () => {
    return (
        <S.Skills>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexContainer wrap={"wrap"} justify={"space-between"} align={"center"}>
                    {skillData.map((s, index) => {
                        return <Skill iconId={s.iconId}
                                      title={s.title}
                                      description={s.description}
                                      key={index}/>
                    })
                    }
                </FlexContainer>

            </Container>

        </S.Skills>
    );
};



