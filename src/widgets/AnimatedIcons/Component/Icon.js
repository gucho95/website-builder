import classNames from 'classnames';
import './style.scss';

const classes = {
  root: 'perfect-center overflow-hidden relative group icon-wrapper',
  absolute: 'absolute inset-0',
  circle: 'circle transform group-hover:rotate-180 absolute inset-0',
  blurLayer: 'backdrop-filter backdrop-blur-2xl absolute inset-0 group-hover:visible invisible',
  content: 'content perfect-center px-7 text-white text-h3/h4 text-center',
};

const Icon = ({ children }) => (
  <div className={classNames(classes.absolute, classes.root)}>
    <div className={classes.circle}></div>
    <div className={classes.blurLayer}></div>
    <div className={classes.content} children={children}></div>
  </div>
);
export default Icon;
