import { BUTTON_HTML_TYPES, BUTTON_TYPES, Heading, Input, Spacing, Button, toast } from '@atoms';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './schema';
import { useDispatch } from 'react-redux';
import authActions from '@actions/auth';

const classes = {
  root: 'h-screen perfect-center bg-grey-light',
  form: 'w-96 grid gap-y-4 mx-auto text-center',
};

const SignIn = () => {
  const { register, handleSubmit, formState } = useForm({ resolver: yupResolver(schema) });
  const { errors } = formState;
  const dispatch = useDispatch();
  const signIn = (payload) => dispatch(authActions.signIn(payload));

  const onFormSuccess = (values) => {
    const afterFail = (error) => {
      const errorMessage = error?.error?.response.data.message;

      toast.error(errorMessage);
    };
    signIn({ ...values, afterFail });
  };

  const onFormError = () => {};

  return (
    <div className={classes.root}>
      <Spacing className='pt-40' />
      <form onSubmit={handleSubmit(onFormSuccess, onFormError)} className={classes.form}>
        <Heading level={3} children='Sign in' />
        <Input placeholder='Email' error={errors.email} showError={false} {...register('email')} />
        <Input
          placeholder='Password'
          error={errors.password}
          showError={false}
          type='password'
          {...register('password')}
        />
        <div>
          <Button
            type={BUTTON_TYPES.PRIMARY}
            htmlType={BUTTON_HTML_TYPES.SUBMIT}
            children='Submit'
            className='rounded-30px'
          />
        </div>
      </form>
    </div>
  );
};

export default SignIn;
