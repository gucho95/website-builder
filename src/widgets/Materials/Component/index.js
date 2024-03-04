import { TYPES } from '../types';
import { withLazyLoad } from '@hocs';

const Type1 = withLazyLoad(() => import('./Types/Type1'));

export const COMPONENT_OPTIONS = { [TYPES[0].value]: Type1 };

const MaterialsWrapper = (props) => {
  const MaterialsWidget = COMPONENT_OPTIONS[props.option];
  return <MaterialsWidget {...props} />;
};

export default MaterialsWrapper;
