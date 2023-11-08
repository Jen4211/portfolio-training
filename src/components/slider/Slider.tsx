import React from 'react';
import {S} from "./Slider_Styles";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../../styles/slider.css';


type SlidePropsType = {
    text: string
    name: string
}


const Slid = (props: SlidePropsType) => {
    return (
        <S.Slid>
            <S.Text>{props.text}</S.Text>
            <S.Name>@{props.name}</S.Name>
        </S.Slid>
    )
}

const items = [
    <Slid name={"Ivan Ivanov"}
          text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dolorem ipsum officia placeatreiciendis tempora? At aut distinctio est explicabo hic mollitia quod repellat sed vel voluptatum.Blanditiis, et, veritatis!"}/>,
    <Slid name={"Ivan Ivanov"}
          text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dolorem ipsum officia placeatreiciendis tempora? At aut distinctio est explicabo hic mollitia quod repellat sed vel voluptatum.Blanditiis, et, veritatis!"}/>,
    <Slid name={"Ivan Ivanov"}
          text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dolorem ipsum officia placeatreiciendis tempora? At aut distinctio est explicabo hic mollitia quod repellat sed vel voluptatum.Blanditiis, et, veritatis!"}/>,
];

export const Slider: React.FC = () => {
    return (
        <S.Slider>
            <AliceCarousel
                mouseTracking
                items={items}
            />
        </S.Slider>
    );
};



