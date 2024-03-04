import { Spacing, Button, BUTTON_TYPES, Image, Paragraph } from '@atoms';
import { Carousel } from '@molecules';
import classNames from 'classnames';
import { useMemo } from 'react';

const classes = {
  root: 'w-full overflow-hidden',
};

const slideClasses = {
  root: ' relative h-795px',
  absolute: 'absolute h-full',
  bgImage: 'w-full h-full object-cover object-center',
  layer1: 'absolute text-white bg-dark bg-opacity-50 w-945px pr-7  pl-52 backdrop-filter backdrop-blur-md',
  title: 'w-527px text-h1 font-black',
  button: 'bg-yellow px-24 py-5 text-p1 uppercase',
};

const Slide = ({ title, buttonText, description, image }) => {
  return (
    <div className={slideClasses.root}>
      <div className={classNames(slideClasses.absolute, 'w-full')}>
        <Image src={image} className={classNames(slideClasses.bgImage, 'transition-all')} />
      </div>
      <div className={classNames(slideClasses.absolute, slideClasses.layer1)}>
        <Spacing className='pt-16' />
        <div className={slideClasses.title} dangerouslySetInnerHTML={{ __html: title }} />
        <Spacing className='pt-5' />
        <Paragraph children={description} className='text-p2-32 font-light ' />
        <Spacing className='pt-10' />
        <Button type={BUTTON_TYPES.CUSTOM} className={slideClasses.button} children={buttonText} />
        <Spacing className='pt-20' />
      </div>
    </div>
  );
};

const Type1 = ({ slides }) => {
  const Slides = useMemo(() => slides?.map((slide, key) => <Slide key={key} index={key} {...slide} />), []);

  return (
    <div className={classes.root}>
      <Carousel slides={Slides} />
    </div>
  );
};

export default Type1;
