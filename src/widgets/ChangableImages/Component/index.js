import { TYPES } from '../types';
import { withLazyLoad } from '@hocs';

const Type1 = withLazyLoad(() => import('./Types/Type1'));

export const COMPONENT_OPTIONS = { [TYPES[0].value]: Type1 };

const ChangableImagesWrapper = (props) => {
  const ChangableImagesWidget = COMPONENT_OPTIONS[props.option];
  return <ChangableImagesWidget {...props} />;
};

export default ChangableImagesWrapper;
