import TextWidget from '@widgets/Text/Component/Types/Type5';
import CardWidget from '@widgets/Card/Component/Types/Type1';
import { Heading, HEADING_LEVELS, Spacing } from '@atoms';
import { Fragment } from 'react';

const classes = {
  root: 'grid grid-cols-1 gap-y-7 text-black',
  container: 'grid grid-cols-3 gap-x-7',
};

const Type1 = (props) => {
  const row1Items = props.items.slice(0, 3);
  const row2Items = props.items.slice(3, 6);
  const imageCard = props.items[props.items.length - 1];

  return (
    <Fragment>
      <Heading level={HEADING_LEVELS[2]} children='Our Services' className='text-center' />
      <Spacing className='pt-12' />
      <div className={classes.root}>
        <div className={classes.container}>
          {row1Items?.map((item, key) => (
            <TextWidget {...item} key={key} />
          ))}
        </div>
        <div className={classes.container}>
          {row2Items?.map((item, key) => (
            <TextWidget {...item} key={key} />
          ))}
        </div>
        <CardWidget {...imageCard} />
      </div>
    </Fragment>
  );
};

export default Type1;
