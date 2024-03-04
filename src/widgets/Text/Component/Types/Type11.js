import { Heading, Paragraph, Spacing } from '@atoms';

const Type11 = ({ title, description }) => (
  <div className='bg-text-11-overlay bg-cover bg-center bg-no-repeat'>
    <Spacing className='pt-14' />
    <div className='w-970px max-w-full mx-auto overflow-hidden bg'>
      <div className='h-1px w-full bg-white bg-opacity-50' />
      <Spacing className='pt-14' />
      <Heading level={1} children={title} className='text-white text-center uppercase' />
      <Spacing className='pt-14' />
      <Paragraph children={description} className='text-p2-32px text-white text-center w-full font-light' />
      <Spacing className='pt-20' />
    </div>
  </div>
);

export default Type11;
