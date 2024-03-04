import { TYPES } from '../types';
import { withLazyLoad } from '@hocs';

const Type1 = withLazyLoad(() => import('./Types/Type1'));
const Type2 = withLazyLoad(() => import('./Types/Type2'));
const Type3 = withLazyLoad(() => import('./Types/Type3'));
const Type4 = withLazyLoad(() => import('./Types/Type4'));
const Type5 = withLazyLoad(() => import('./Types/Type5'));
const Type6 = withLazyLoad(() => import('./Types/Type6'));

export const COMPONENT_OPTIONS = {
  [TYPES[0].value]: Type1,
  [TYPES[1].value]: Type2,
  [TYPES[2].value]: Type3,
  [TYPES[3].value]: Type4,
  [TYPES[4].value]: Type5,
  [TYPES[5].value]: Type6,
};

// TODO: check styles
const SliderWrapper = (props) => {
  const SliderWidget = COMPONENT_OPTIONS[props.option];
  return <SliderWidget {...props} />;
};

export default SliderWrapper;
