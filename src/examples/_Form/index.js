import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import schema from './schema';

const voidFn = () => {};

const Form = () => {
  const { handleSubmit, register, control } = useForm({
    resolver: yupResolver(schema),
  });

  voidFn(handleSubmit, register, control);
  const onFormSuccess = (values) => {};
  const onFormError = (values) => {};

  return <form handleSubmit={(onFormSuccess, onFormError)}>YOUR FORM HERE</form>;
};

export default Form;
