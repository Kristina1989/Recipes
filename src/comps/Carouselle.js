import React, {useContext} from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MainContext from "../MainContext/MainContext";


export default function CarouselComponent({recipe}) {

    const {getPhoto} = useContext(MainContext)


    return (
        <div>

            <Carousel>
                {getPhoto.map((x, index) => <div key={index}>
                    <img src={x} alt=""/>
                </div>)}
            </Carousel>
        </div>
    );
}