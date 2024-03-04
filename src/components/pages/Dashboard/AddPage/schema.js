import * as yup from 'yup';

const schema = yup.object().shape({
  title: yup.string().trim().min(2).required('Invalid value'),
  path: yup.string().min(2).required('Invalid value'),
});

export default schema;
