import { withLazyLoad } from '@hocs';
import { PATHS } from './paths';
import { ROUTE_SCOPES } from './scopes';
const { AUTHED, UN_AUTHED } = ROUTE_SCOPES;

const Components = withLazyLoad(() => import('@pages/Components'));
const SignIn = withLazyLoad(() => import('@pages/Authorization/SignIn'));
const SignOut = withLazyLoad(() => import('@pages/Authorization/SignOut'));
const Dashboard = withLazyLoad(() => import('@pages/Dashboard'));
const SinglePage = withLazyLoad(() => import('@pages/SinglePage'));
const Page404 = withLazyLoad(() => import('@pages/Page404'));

// DASHBOARD COMPONENTS
const ManageSinglePage = withLazyLoad(() => import('@pages/Dashboard/SinglePage'));
const AddPage = withLazyLoad(() => import('@pages/Dashboard/AddPage'));
const Settings = withLazyLoad(() => import('@pages/Dashboard/Settings'));
const AddWidget = withLazyLoad(() => import('@pages/Dashboard/AddWidget'));
const Media = withLazyLoad(() => import('@pages/Dashboard/Media'));
const Redirects = withLazyLoad(() => import('@pages/Dashboard/Redirects'));

export const ROUTES = [
  { id: 1, key: 'Homepage', path: PATHS.HOMEPAGE, component: Components, exact: true, isMenuItem: true },
  { id: 2, key: 'SignIn', path: PATHS.SIGN_IN, component: SignIn, isMenuItem: true, scope: UN_AUTHED },
  { id: 3, key: 'Dashboard', path: PATHS.DASHBOARD, component: Dashboard, isMenuItem: true, scope: UN_AUTHED },
  { id: 4, key: 'Sign out', path: PATHS.SIGN_OUT, component: SignOut, scope: UN_AUTHED },
  { id: 5, key: 'Single Page', path: PATHS.SINGLE_PAGE_VIEW, component: SinglePage },
  { id: 6, key: 'Page 404 ', path: PATHS.PAGE_404, component: Page404 },
];

export const DASHBOARD_ROUTES = [
  { label: 'Single page', path: PATHS.SINGLE_PAGE_MANAGE, component: ManageSinglePage, exact: true, isMenuItem: false },
  { label: 'Add widget', path: PATHS.ADD_WIDGET, component: AddWidget, isMenuItem: false },
  { label: 'Update widget', path: PATHS.UPDATE_WIDGET, component: AddWidget, isMenuItem: false },
  { icon: 'icon', label: 'Add page', path: PATHS.ADD_PAGE, component: AddPage, isMenuItem: true },
  { icon: 'icon', label: 'Media', path: PATHS.MEDIA, component: Media, isMenuItem: true },
  { icon: 'icon', label: 'Redirects', path: PATHS.REDIRECTS, component: Redirects, isMenuItem: true },
  { icon: 'icon', label: 'Settings', path: PATHS.SETTINGS, component: Settings, isMenuItem: true },
];
