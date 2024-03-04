import { WIDTH_CLASSES } from '@constants/classes';
import classNames from 'classnames';
import WidgetRenderer from './WidgetRenderer';

const getWidget = (widget) => (widget ? <WidgetRenderer {...widget.widgetData} /> : null);

const ColumnRenderer = ({ data }) => {
  const widget = data?.widget;
  const colWidth = data.layout.w;
  const widthClassName = WIDTH_CLASSES[colWidth];
  const Widget = getWidget(widget);

  return <div children={Widget} className={classNames(widthClassName, 'flex-shrink-0 p-4')} />;
};

export default ColumnRenderer;
