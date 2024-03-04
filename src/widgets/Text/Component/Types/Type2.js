import { Heading, Paragraph, Spacing } from '@atoms';

const Type2 = ({ title, description }) => (
  <div className='w-970px max-w-full mx-auto overflow-hidden'>
    <Heading level={3} children={title} className='text-dark text-center' />
    <Spacing className='pt-7' />
    <Paragraph children={description} className='text-p2-30 text-dark text-center w-full font-light' />
  </div>
);

export default Type2;
