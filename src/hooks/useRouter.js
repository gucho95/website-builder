import { useMemo } from 'react';
import { useHistory, useParams, useLocation, useRouteMatch } from 'react-router-dom';

export function useRouter() {
  const params = useParams();
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();

  return useMemo(() => {
    return {
      push: history.push,
      replace: history.replace,
      pathname: location.pathname,
      match,
      location,
      history,
      params,
    };
  }, [params, match, location, history]);
}
