import { TYPES } from '../types';
import { withLazyLoad } from '@hocs';

const Type1 = withLazyLoad(() => import('./Types/Type1'));
export const COMPONENT_OPTIONS = { [TYPES[0].value]: Type1 };

const ReviewsWidgetWrapper = (props) => {
  const ReviewsWidget = COMPONENT_OPTIONS[props.option];
  return <ReviewsWidget {...props} />;
};

export default ReviewsWidgetWrapper;
