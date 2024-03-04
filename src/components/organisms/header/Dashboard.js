import { Heading, Spacing, SearchBar, Link } from '@atoms';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { PATHS } from '@constants/paths';

const schema = yup.object().shape({
  search: yup.string().required().trim().min(1),
});

const classes = {
  root: 'bg-dark flex pl-14 pt-1 pb-2',
  heading: 'flex-shrinnk-0 text-white',
  form: 'w-694px bg-opacity-20 bg-white rounded-3px flex-shrinnk-0 px-3',
  search: '',
};

const Header = () => {
  const { handleSubmit, register } = useForm({ resolver: yupResolver(schema) });

  const onFormSuccess = (values) => {
    alert(`search ${values.search}`);
  };

  const onFormError = () => {};
  return (
    <header className={classes.root}>
      <Link to={PATHS.DASHBOARD} className='flex-shrink-0'>
        <Heading level={3} children='FS Panel' className={classes.heading} />
      </Link>
      <Spacing className='pl-28 ' />
      <form className={classes.form} onSubmit={handleSubmit(onFormSuccess, onFormError)} autoComplete='off'>
        <SearchBar {...register('search')} />
      </form>
      <Spacing className='pl-12 ' />
    </header>
  );
};

export default Header;
