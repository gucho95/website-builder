import { Spacing, Image, Paragraph } from '@atoms';
import { ThumbnailsCarousel } from '@molecules';
import { useMemo } from 'react';

const MAX_SLIDES = 6;

const materialItemClasses = {
  image: 'w-full h-130px object-cover object-center rounded-full',
  title: 'text-p2-30 text-center line-clamp-2',
};

const MaterialItem = ({ title, image }) => (
  <div className='w-130px'>
    <Image src={image} className={materialItemClasses.image} />
    <Spacing className='pt-5' />
    <Paragraph className={materialItemClasses.title} children={title} />
  </div>
);

const Slide = ({ title, image, index }) => {
  return (
    <div className='flex justify-center'>
      <MaterialItem title={title} image={image} index={index} />
    </div>
  );
};

const parentClasses = {
  root: 'w-full mx-auto overflow-hidden',
  wrapper: 'w-full max-w-full',
};

const Type1 = ({ materials }) => {
  const Slides = useMemo(() => materials?.map((slide, key) => <Slide key={key} index={key} {...slide} />), []);

  return (
    <div className={parentClasses.root}>
      <div className={parentClasses.wrapper}>
        <ThumbnailsCarousel
          slides={Slides}
          slidesToShow={materials.length < MAX_SLIDES ? materials.length : MAX_SLIDES}
          infinite={true}
        />
      </div>
    </div>
  );
};

export default Type1;
