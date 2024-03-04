import { useMount } from '@hooks';
import React from 'react';
import Slider from 'react-slick';
import './index.scss';

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
};

const Carousel = ({ slides: Slides, onMount, ...carouselProps }) => {
  const allSettings = { ...settings, ...carouselProps };

  useMount(() => onMount && onMount());

  return (
    <div className='thumbnails-carousel'>
      <Slider {...allSettings} children={Slides} rows={1} swipe={true} className='relative' swipeToSlide={true} />
    </div>
  );
};

export default Carousel;
