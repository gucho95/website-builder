import CardWidget from '@widgets/Card/Component/Types/Type3';
import { Button, BUTTON_TYPES, Heading, HEADING_LEVELS, Spacing } from '@atoms';
import { Fragment } from 'react';

const classes = { container: 'grid grid-cols-4 gap-7' };

const Type1 = (props) => {
  const items = props.items;

  return (
    <Fragment>
      <Heading level={HEADING_LEVELS[2]} children='What our customer day' className='text-center uppercase' />
      <Spacing className='pt-14' />
      <div className={classes.container}>
        {items?.map((item, key) => (
          <CardWidget {...item} key={key} />
        ))}
      </div>
      <Spacing className='pt-14' />
      <div className='text-center'>
        <Button type={BUTTON_TYPES.SECONDARY} className='uppercase'>
          See all reviews &nbsp;&nbsp;&#8594;
        </Button>
      </div>
    </Fragment>
  );
};

export default Type1;
