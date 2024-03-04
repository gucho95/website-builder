import { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { SearchIcon } from '@icons';

const classes = {
  root: 'w-full relative',
  input:
    'border-1px py-3 pl-5 pr-10 outline-none placeholder-grey-dark text-p5 text-blue-dark focus:border-blue-light disabled:border-grey-dark disabled:bg-transparent disabled:opacity-30 w-full',
  iconWrapper: 'absolute top-0 right-5 h-full perfect-center',
  icon: 'w-4 h-4 fill-current',
  iconFocused: 'text-blue-light',
  iconBlur: 'text-grey-dark',
};

const Search = (props) => {
  const { error, className, placeholder, rounded, ...inputProps } = props;
  const [focused, setFocused] = useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  return (
    <div className={classes.root}>
      <input
        className={classNames(classes.input, className, rounded ? 'rounded-30px' : '')}
        placeholder={focused ? null : placeholder}
        onFocus={onFocus}
        onBlur={onBlur}
        {...inputProps}
      />
      <div className={classes.iconWrapper}>
        <SearchIcon className={classNames(classes.icon, focused ? classes.iconFocused : classes.iconBlur)} />
      </div>
    </div>
  );
};

Search.propTypes = { error: PropTypes.bool };
export default Search;
