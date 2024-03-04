import { TYPES } from '../types';
import { withLazyLoad } from '@hocs';

const Type1 = withLazyLoad(() => import('./Types/Type1'));
const Type2 = withLazyLoad(() => import('./Types/Type2'));
const Type3 = withLazyLoad(() => import('./Types/Type3'));
const Type4 = withLazyLoad(() => import('./Types/Type4'));
const Type5 = withLazyLoad(() => import('./Types/Type5'));
const Type6 = withLazyLoad(() => import('./Types/Type6'));
const Type7 = withLazyLoad(() => import('./Types/Type7'));
const Type8 = withLazyLoad(() => import('./Types/Type8'));

export const COMPONENT_OPTIONS = {
  [TYPES[0].value]: Type1,
  [TYPES[1].value]: Type2,
  [TYPES[2].value]: Type3,
  [TYPES[3].value]: Type4,
  [TYPES[4].value]: Type5,
  [TYPES[5].value]: Type6,
  [TYPES[6].value]: Type7,
  [TYPES[7].value]: Type8,
};

const CardWrapper = (props) => {
  const CardWidget = COMPONENT_OPTIONS[props.option];
  return <CardWidget {...props} />;
};

export default CardWrapper;
