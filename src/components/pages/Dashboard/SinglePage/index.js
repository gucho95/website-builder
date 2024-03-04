import { Fragment } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Spacing } from '@atoms';
import { selectPage } from '@selectors/page';
import { selectBlocksMaxIndex, selectPageBlocks } from '@selectors/pageBlocks';
import pageActions from '@actions/page';
import blockActions from '@actions/pageBlocks';
import { useRouter } from '@hooks';
import { PATHS } from '@constants/paths';
import { BLOCK } from '@constants/system';

// SUBCOMPONENTS
import BlockRenderer from './BlockRenderer';
import BlockActions from './BlockActions';
import PageActions from './PageActions';

const SinglePage = () => {
  const { match } = useRouter();
  const dispatch = useDispatch();
  const { page } = match.params;
  const history = useHistory();

  // SELECTORS
  const pageData = useSelector((state) => selectPage(state, page));
  const pageBlocks = useSelector((state) => selectPageBlocks(state, page));
  const blocksMaxIndex = useSelector((state) => selectBlocksMaxIndex(state, page));

  // PAGE ACTIONS
  const onPageRemove = () => {
    dispatch(pageActions.remove(page));
    history.push(PATHS.ADD_PAGE);
  };

  // BLOCK ACTIONS
  const onAddBlock = () => {
    const data = {
      parentId: page,
      id: uuidv4(),
      index: blocksMaxIndex + 1,
      type: BLOCK,
    };
    dispatch(blockActions.add(data));
  };
  const onRemoveBlock = (payload) => dispatch(blockActions.remove(payload));
  const onLayoutChange = (payload) => dispatch(blockActions.updateIndex(payload));

  return (
    <Fragment>
      <Spacing className='py-2' />
      <PageActions page={pageData.path} data={pageData} onRemove={onPageRemove} />
      <Spacing className='py-2' />
      <BlockRenderer data={pageBlocks} onRemoveBlock={onRemoveBlock} onLayoutChange={onLayoutChange} />
      <BlockActions onAdd={onAddBlock} />
    </Fragment>
  );
};

export default SinglePage;
