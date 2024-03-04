import { useMemo } from 'react';
import { WIDGET_COMPONENTS } from '@constants/widgets';

const getWidgetByType = (type) => WIDGET_COMPONENTS[type];

const WidgetRenderer = (props) => {
  const widgetType = props?.type;
  const Widget = useMemo(() => getWidgetByType(widgetType), [widgetType]);
  return <Widget {...props} />;
};

export default WidgetRenderer;
