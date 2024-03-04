import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ROUTES } from '@constants/routes';
import { isAuthedUser } from '@selectors/user';
import { getScopeWrapper } from '@constants/scopes';
import { PATHS } from '@constants/paths';
import ModalRenderer from '@organisms/modal/ModalRenderer';

const RootRouter = () => {
  const isAuthed = useSelector(isAuthedUser);

  return (
    <BrowserRouter>
      <ModalRenderer />
      <Switch>
        {ROUTES.map(({ path, exact, scope, component: Component }) => {
          const RouteRenderer = getScopeWrapper(scope);
          return <RouteRenderer key={path} isAuthed={isAuthed} exact={exact} path={path} component={Component} />;
        })}
        <Redirect to={PATHS.PAGE_404} />
      </Switch>
    </BrowserRouter>
  );
};

export default RootRouter;
