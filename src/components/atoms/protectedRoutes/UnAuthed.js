import { Route, Redirect } from 'react-router-dom';
import { PATHS } from '@constants/paths';

const UnAuthed = ({ component: Component, isAuthed, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (isAuthed) {
        return <Redirect to={{ pathname: PATHS.DASHBOARD, state: { from: props.location } }} />;
      }
      return <Component {...props} />;
    }}
  />
);

export default UnAuthed;
