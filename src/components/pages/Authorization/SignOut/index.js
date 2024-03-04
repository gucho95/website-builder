import React, { useEffect, useCallback } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { PATHS } from '@constants/paths';
import { isAuthedUser } from '@selectors/user';
import authActions from '@actions/auth';

const SignOut = () => {
  const isAuthed = useSelector(isAuthedUser);
  const dispatch = useDispatch();
  const signOut = useCallback(() => dispatch(authActions.signOut()), [dispatch]);

  useEffect(() => {
    isAuthed && signOut();
  }, [signOut, isAuthed]);

  if (!isAuthed) {
    return <Redirect to={PATHS.SIGN_IN} />;
  }
  return null;
};

export default SignOut;
