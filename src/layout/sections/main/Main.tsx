import React from 'react';
import photo from '../../../assets/images/photo.webp'
import {S} from "./Main_Styles";
import {FlexContainer} from "../../../components/FlexContainer";
import {Photo} from "../../../components/Photo";
import {Container} from "../../../components/Container";
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';

export const Main: React.FC= () => {
    return (
        <S.Main>
            <Container>
                <FlexContainer justify={"space-around"} align={"center"} wrap={"wrap"}>
                    <div>
                        <S.SmallText>Hi There</S.SmallText>
                        <S.Name>I am <span>Evgeniy Huletskiy</span></S.Name>
                        <S.MainTitle>
                            <p>A Frontend Developer.</p>
                            <Typewriter
                                options={{
                                    strings: ['A Web Developer.' ,'A Frontend Developer.' ],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </S.MainTitle>
                    </div>
                    <Tilt tiltReverse={true}>
                        <S.PhotoWrapper>
                            <Photo src={photo} alt="logo"/>
                        </S.PhotoWrapper>
                    </Tilt>


                </FlexContainer>
            </Container>

        </S.Main>
    );
};


