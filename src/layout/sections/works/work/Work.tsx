import React from 'react';
import {S} from "../Works_Styles";
import {Link} from "../../../../components/Link";
import {Button} from "../../../../components/Button";


type WorkPropsType = {
    src: string
    title: string
    text: string
}
export const Work: React.FC<WorkPropsType> = (props: WorkPropsType) => {
    return (
        <S.Work>
            <S.ImageWorkWrapper>
                <S.Image src={props.src} alt={"image"}/>
                <Button>view project</Button>
            </S.ImageWorkWrapper>

            <S.CardDescriptionWrapper>
                <S.Title>{props.title}</S.Title>
                <S.Text>{props.text}</S.Text>
                <Link href={"#"}>demo </Link>
                <Link href={"#"}>code </Link>
            </S.CardDescriptionWrapper>

        </S.Work>
    );
};


