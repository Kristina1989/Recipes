import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";



export default function CarouselComponent({recipe}) {


    return (
        <div>

            <Carousel>
                {recipe.photo.map((x, index) => <div key={index}>
                    <img style={{width:"200px"}} src={x} alt=""/>
                </div>)}
            </Carousel>
        </div>
    );
}