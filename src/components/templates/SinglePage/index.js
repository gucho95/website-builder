import { Heading } from '@atoms';
import BlockRenderer from './BlockRenderer';

const EmptyScreen = () => <Heading level={2} children='No Data' className='text-center' />;
const Block = ({ block }) => <BlockRenderer data={block} key={block.id} />;

const SinglePage = ({ data }) => {
  const Content = data?.length ? data.map((block) => <Block block={block} key={block.id} />) : EmptyScreen;
  return Content;
};

export default SinglePage;
