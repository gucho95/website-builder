import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import schema from './schema';
import { v4 as uuidv4 } from 'uuid';
import { Button, BUTTON_HTML_TYPES, BUTTON_TYPES, Input, Spacing } from '@atoms';
import pageActions from '@actions/page';
import { selectPages } from '@selectors/page';
import { useRouter } from '@hooks';
import { generateSinglePagePath } from '@constants/paths';
import { PAGE } from '@constants/system';

const checkDuplicate = (data, current) => {
  const isDuplicate = data.find(
    (i) => i.title.toLowerCase() === current.title.toLowerCase() || i.path.toLowerCase() === current.path.toLowerCase()
  );
  return !!isDuplicate;
};

const classes = {
  wrapper: '',
  form: 'w-6/12 grid gap-y-4',
  buttonWrapper: 'flex justify-center',
};

const AddPage = () => {
  const dispatch = useDispatch();
  const pages = useSelector(selectPages);
  const { history } = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
    setValue,
  } = useForm({ resolver: yupResolver(schema), context: { pages } });

  const addPage = (payload) => dispatch(pageActions.add(payload));

  const onFormSuccess = (values) => {
    const isDuplicate = checkDuplicate(pages, values);
    if (isDuplicate) {
      toast.error('Duplicate page!');
      return;
    }
    const id = uuidv4();
    const data = { ...values, type: PAGE, data: '', id };
    const path = generateSinglePagePath(id);
    addPage(data);
    history.push(path);
  };

  const onFormError = (errors) => {
    console.error(errors);
  };

  const title = watch('title');

  //GENERATE PATH ON TITLE CHANGE
  useEffect(() => {
    if (!title) {
      setValue('path', '', { shouldValidate: false });
      return;
    }

    const path = title.toLowerCase().split(/\s+/).join('-');
    setValue('path', path, { shouldValidate: true });
  }, [title]);

  return (
    <div className={classes.wrapper}>
      <Spacing className='pt-12' />
      <form onSubmit={handleSubmit(onFormSuccess, onFormError)} className={classes.form} autoComplete='off' noValidate>
        <Input placeholder='Title' error={errors.title} {...register('title')} />
        <Input placeholder='Path' error={errors.path} {...register('path')} />
        <div className={classes.buttonWrapper}>
          <Button type={BUTTON_TYPES.PRIMARY} htmlType={BUTTON_HTML_TYPES.SUBMIT} children='Submit' />
        </div>
      </form>
    </div>
  );
};

export default AddPage;
