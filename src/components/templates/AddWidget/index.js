import { Spacing } from '@atoms';
import Header from './Header';
import Body from './Body';

const classes = {
  headerWrapper: 'sticky top-0 bg-grey-body z-30',
};

const AddWidget = () => {
  return (
    <div>
      <div className={classes.headerWrapper}>
        <Spacing className='py-2' />
        <Header />
        <Spacing className='pt-4' />
      </div>
      <Body />
      <Spacing className='py-2' />
    </div>
  );
};

export default AddWidget;
