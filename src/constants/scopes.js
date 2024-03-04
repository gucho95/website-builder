import AuthedWrapper from '@atoms/protectedRoutes/Authed';
import UnAuthedWrapper from '@atoms/protectedRoutes/UnAuthed';
import { Route as CommonWrapper } from 'react-router-dom';

export const ROUTE_SCOPES = {
  AUTHED: 'authed',
  UN_AUTHED: 'un_authed',
  COMMON: 'common',
};

export const ROUTE_SCOPE_WRAPPERS = {
  [ROUTE_SCOPES.AUTHED]: AuthedWrapper,
  [ROUTE_SCOPES.UN_AUTHED]: UnAuthedWrapper,
  [ROUTE_SCOPES.COMMON]: CommonWrapper,
};

export const getScopeWrapper = (scope = ROUTE_SCOPES.COMMON) => ROUTE_SCOPE_WRAPPERS[scope];
