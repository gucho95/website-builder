import { Spacing, Button, BUTTON_TYPES, Image, Paragraph, Text } from '@atoms';
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
  layer1: 'absolute text-white bg-dark bg-opacity-50 w-945px pr-7 pl-52 backdrop-filter backdrop-blur-md',
  title: 'w-527px text-h1 font-black',
  button: 'px-24 py-5 text-p1 uppercase',
  button2: 'px-24 py-5 text-p1 uppercase',
  button2: 'bg-yellow',
};

const Type3 = ({ breadcrumbPrimary, breadcrumbSecondary, title, description, image, button1, button2, index }) => {
  return (
    <div className={slideClasses.root}>
      <div className={classNames(slideClasses.absolute, 'w-full')}>
        <Image src={image} className={classNames(slideClasses.bgImage, 'transition-all')} />
      </div>
      <div className={classNames(slideClasses.absolute, slideClasses.layer1)}>
        <Spacing className='pt-12' />
        <Paragraph className='text-p3-25'>
          <Text children={breadcrumbPrimary} className='font-light' />
          <Text className='font-light'>&nbsp;{'>'} &nbsp;</Text>
          <Text children={breadcrumbSecondary} className='font-medium' />
        </Paragraph>
        <Spacing className='pt-16' />
        <div className={slideClasses.title} dangerouslySetInnerHTML={{ __html: title }} />
        <Spacing className='pt-5' />
        <Paragraph children={description} className='text-p2-32 font-light' />
        <Spacing className='pt-8' />
        <div>
          <Button type={BUTTON_TYPES.CUSTOM} className={slideClasses.button}>
            {button1} &nbsp;🡢
          </Button>
        </div>
        <Spacing className='pt-4' />
        <div>
          <Button
            type={BUTTON_TYPES.CUSTOM}
            className={classNames(slideClasses.button, slideClasses.button2)}
            children={button2}
          />
        </div>
        <Spacing className='pt-20' />
      </div>
    </div>
  );
};

const Type1 = ({ slides }) => {
  const Slides = useMemo(() => slides?.map((slide, key) => <Type3 key={key} index={key} {...slide} />), []);

  return (
    <div className={classes.root}>
      <Carousel slides={Slides} />
    </div>
  );
};

export default Type1;
