import classNames from 'classnames';

const Container = (props) => {
  const { className, ...containerProps } = props;
  return <div className={classNames(className, 'px-2')} {...containerProps} />;
};

export default Container;
