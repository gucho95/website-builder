import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router';
import { DASHBOARD_ROUTES } from '@constants/routes';
import { DashboardHeader as Header, Sidebar } from '@organisms';
import { DashboardTemplate as Template } from '@templates';
import { selectPagesMenu } from '@selectors/page';
import { PATHS } from '@constants/paths';

const signOutItem = {
  icon: null,
  label: 'Sign out',
  path: PATHS.SIGN_OUT,
};

const bottomMenuData = [...DASHBOARD_ROUTES.filter((i) => i.isMenuItem), signOutItem];

const Content = () => (
  <div className='min-h-full bg-grey-body'>
    <div className='pl-12 pr-4 h-full'>
      <Switch>
        {DASHBOARD_ROUTES.map(({ path, exact, component: Component }) => (
          <Route key={path} exact={exact} path={path} component={Component} />
        ))}
      </Switch>
    </div>
  </div>
);

const Dashboard = () => {
  const pagesMenu = useSelector(selectPagesMenu);
  const SidebarWithProps = () => <Sidebar pagesMenu={pagesMenu} staticMenu={bottomMenuData} />;
  return <Template components={{ Header, Sidebar: SidebarWithProps, Content }} />;
};

export default Dashboard;
