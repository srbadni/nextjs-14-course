"use client"

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function ClientRoutePage() {
    const settings = {
        dots: true,
      };
    return <div>
        my client component
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