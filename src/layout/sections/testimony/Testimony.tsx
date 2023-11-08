import React from 'react';
import {S} from "./Testimony_Styles"
import {SectionTitle} from "../../../components/SectionTitle";
import {Icon} from "../../../components/icon/Icon";
import {Slider} from "../../../components/slider/Slider";
import {FlexContainer} from "../../../components/FlexContainer";
import {IconWrapper} from "../skills/Skills_Styles";
import {Container} from "../../../components/Container";

export const Testimony: React.FC = () => {
    return (
        <S.Testimony>
            <Container>
                <SectionTitle>Testimony</SectionTitle>
                <FlexContainer direction={"column"} align={"center"}>
                    <IconWrapper>
                        <Icon iconId={"quote"} />
                    </IconWrapper>
                    <Slider/>
                </FlexContainer>
            </Container>
        </S.Testimony>
    );
};


