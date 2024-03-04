import classNames from 'classnames';

const classes = { button: 'w-14 h-14 rounded-full bg-blue-light text-white perfect-center hover:bg-blue-hover' };
const Button = ({ className, ...props }) => <button className={classNames(classes.button, className)} {...props} />;

export default Button;
