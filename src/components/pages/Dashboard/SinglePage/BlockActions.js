import { Button, BUTTON_TYPES, Spacing } from '@atoms';

const classes = {
  buttonWrapper: 'sticky bottom-0 py-4 bg-grey-body',
};

const BlockActions = ({ onAdd }) => {
  return (
    <div className={classes.buttonWrapper}>
      <div className='w-full h-1px bg-grey-light' />
      <Spacing className='pt-2' />
      <Button type={BUTTON_TYPES.PRIMARY} children='Add Block' onClick={onAdd} />
    </div>
  );
};

export default BlockActions;
