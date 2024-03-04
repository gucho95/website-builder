import * as yup from 'yup';

const schema = yup.object().shape({
  oldUrl: yup.string().required(),
  newUrlTo: yup.string().required(),
  regexUrl: yup.string().required(),
  statusCode: yup.number().required(),
});

export default schema;
