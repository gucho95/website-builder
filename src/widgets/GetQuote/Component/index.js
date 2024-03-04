import { TYPES } from '../types';
import { withLazyLoad } from '@hocs';
const Type1 = withLazyLoad(() => import('./Types/Type1/index'));

export const COMPONENT_OPTIONS = { [TYPES[0].value]: Type1 };

const ComponentWrapper = (props) => {
  const Widget = COMPONENT_OPTIONS[props.option];
  return <Widget {...props} />;
};

export default ComponentWrapper;
