import { Link } from 'react-router-dom';

export const External = ({ children = '', ...props }) => <a children={children} target='_blank' {...props} />;
export const Internal = (props) => <Link {...props} />;
