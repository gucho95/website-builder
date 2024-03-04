import RcTabs, { TabPane as RcTabPane } from 'rc-tabs';
import 'rc-tabs/assets/index.css';
import './index.scss';

const Tabs = ({ data, activeKey, setActiveKey, titlePrefix, tabProps }) => {
  return (
    <RcTabs {...tabProps} activeKey={activeKey} onChange={(key) => setActiveKey(key.toString())}>
      {data
        ? data.map(({ body: Body }, index) => (
            <RcTabPane forceRender={true} key={index} tab={`${titlePrefix} ${index + 1}`} children={Body} />
          ))
        : null}
    </RcTabs>
  );
};

export default Tabs;
