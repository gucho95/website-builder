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
};

const Carousel = ({ slides: Slides, onMount, ...carouselProps }) => {
  const allSettings = { ...settings, ...carouselProps };

  useMount(() => onMount && onMount());

  return <Slider {...allSettings} children={Slides} className='relative' />;
};

export default Carousel;
