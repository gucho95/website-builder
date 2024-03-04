import { TYPES } from '../types';
import { withLazyLoad } from '@hocs';

const Type1 = withLazyLoad(() => import('./Types/Type1'));
export const COMPONENT_OPTIONS = { [TYPES[0].value]: Type1 };

const ProjectsWidgetWrapper = (props) => {
  const ProjectsWidget = COMPONENT_OPTIONS[props.option];
  return <ProjectsWidget {...props} />;
};

export default ProjectsWidgetWrapper;
