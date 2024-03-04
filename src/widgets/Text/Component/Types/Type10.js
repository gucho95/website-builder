import { Heading, Paragraph, Spacing } from '@atoms';

const Type10 = ({ title, description }) => (
  <div className='bg-blue-hover'>
    <div className='w-970px max-w-full mx-auto overflow-hidden bg'>
      <div className='h-1px w-full bg-white bg-opacity-50' />
      <Spacing className='pt-7' />
      <Heading level={2} children={title} className='text-white text-center uppercase' />
      <Spacing className='pt-7' />
      <Paragraph children={description} className='text-p1 text-white text-center w-full font-light' />
      <Spacing className='pt-20' />
    </div>
  </div>
);

export default Type10;
