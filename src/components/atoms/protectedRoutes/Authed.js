import { Route, Redirect } from 'react-router-dom';
import { PATHS } from '@constants/paths';

const Authed = ({ component: Component, isAuthed, isOnboarded, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (!isAuthed) {
        return <Redirect to={{ pathname: PATHS.SIGN_IN, state: { from: props.location } }} />;
      }

      return <Component {...props} />;
    }}
  />
);

export default Authed;
