import { useDispatch, useSelector } from 'react-redux';
import { add } from '@actions/page';
import { selectPage } from '@selectors/page';

const voidFn = () => {};

const Example = () => {
  const dispatch = useDispatch();
  const addPage = (payload) => dispatch(add(payload));
  const pageData = useSelector(selectPage);
  voidFn(pageData);
  voidFn(addPage);

  return <div />;
};

export default Example;
