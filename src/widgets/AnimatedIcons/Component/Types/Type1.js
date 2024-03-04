import { Spacing } from '@atoms';
import { Fragment } from 'react';
import Icon from '../Icon';

const contentClasses = { container: 'w-718px flex items-start justify-between flex-wrap space-y-5 mx-auto' };

const Content = ({ data = ['mock 1', 'mock 2', 'mock 3', 'mock 4'] }) => (
  <Fragment>
    <Spacing className='pt-5' />
    <div className={contentClasses.container}>
      {data?.map((text, index) => (
        <Icon children={text} key={index} />
      ))}
    </div>
    <Spacing className='pt-5' />
  </Fragment>
);

const classes = {
  root: 'relative',
  wrapper: 'w-full relative overflow-hidden bg-cover bg-fixed bg-center bg-no-repeat',
  contentWrapper: 'absolute z-10 h-full w-full backdrop-filter backdrop-blur-sm',
};

const Type1 = ({ image, text }) => {
  return (
    <div className={classes.root}>
      <div className={classes.wrapper} style={{ backgroundImage: `url(${image})` }}>
        {/* REAL CONTENT */}
        <div className={classes.contentWrapper}>
          <Content data={text} />
        </div>
        {/* FAKE CONTENT */}
        <div className='invisible'>
          <Content />
        </div>
      </div>
    </div>
  );
};

export default Type1;
