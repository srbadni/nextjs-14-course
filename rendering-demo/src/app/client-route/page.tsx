"use client"
import {useContext} from "react";
import { themeContext } from '@/components/themeProvider';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function ClientRoutePage() {
  const theme = useContext(themeContext);
    const settings = {
        dots: true,
      };
    return <div>
        <h1 style={{color: theme.colors.primary}}>my client component</h1>
        <div className="image-slider-container">
      <Slider {...settings}>
        <div>
          <img src="https://picsum.photos/id/237/200/300" />
        </div>
        <div>
          <img src="https://picsum.photos/id/237/200/300" />
        </div>
        <div>
          <img src="https://picsum.photos/id/237/200/300" />
        </div>
        <div>
          <img src="https://picsum.photos/id/237/200/300" />
        </div>
      </Slider>
    </div>
    </div>
}