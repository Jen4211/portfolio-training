import React from 'react';
import {FlexContainer} from "../../../components/FlexContainer";
import {Photo} from "../../../components/Photo";
import {S} from "./AboutMe_Styles";
import photo from "../../../assets/images/photo.webp"
import {SectionTitle} from "../../../components/SectionTitle";
import {Container} from "../../../components/Container";




export const AboutMe: React.FC = () => {
    return (
        <S.AboutMe>
            <Container>
                <SectionTitle>About Me</SectionTitle>
                <FlexContainer align={"center"}>
                    <Photo src={photo} alt={"photo"}/>
                    <S.AboutMeText>Lorem ipsum dolor sit amet, ipsum dolor sit amet ipsum dolor sit amet consectetur adipisicing elit. Amet architecto, consequatur cum
                        deserunt earum enim neque officiis, perferendis qui rerum tenetur ut! Ab aut cum ducimus enim, est
                        fugit vel?</S.AboutMeText>
                </FlexContainer>
            </Container>
        </S.AboutMe>

    );
};


