import loadable from '@loadable/component';

const withLazyLoad = (componentImport) => loadable(componentImport);

export default withLazyLoad;
