/* eslint-disable tailwindcss/no-custom-classname */
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import React from 'react';
import { Carousel } from 'react-responsive-carousel';

export default function CarouselProject() {
  return (
    <div className="mx-auto flex max-w-lg items-center justify-center">
      <Carousel showThumbs={false} showStatus={false}>
        <div>
          <img src="/assets/images/larashop.jpg" alt="image1" />
        </div>
        <div>
          <img src="/assets/images/management.jpg" alt="image2" />
        </div>
        <div>
          <img src="/assets/images/myresume.jpg" alt="image3" />
        </div>
      </Carousel>
    </div>
  );
}
