import classNames from 'classnames';
import { forwardRef } from 'react';

const classes = {
  button: 'p-4 bg-blue-light flex items-center text-white h-full rounded-tl-3px rounded-bl-3px',
  iconWrapper: '',
  pipe: 'mx-3 w-1px h-full flex  bg-black bg-opacity-20',
  text: 'text-p1',
};

const SideButton = forwardRef(({ className, icon: Icon, text: Text, ...buttonProps }, ref) => {
  return (
    <button className={classNames(classes.button, className)} {...buttonProps}>
      <div children={Icon} className={classes.iconWrapper} />
      <div className={classes.pipe} />
      <div children={Text} className={classes.text} />
    </button>
  );
});

export default SideButton;
