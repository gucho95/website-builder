import { Heading, Paragraph, Spacing } from '@atoms';

const Type8 = ({ title, description }) => (
  <div className='bg-blue-hover'>
    <div className='w-345px mx-auto'>
      <div className='h-1px w-full bg-white  bg-opacity-50' />
      <Spacing className='pt-7' />
      <div className='px-8 pt-7 pb-14 bg-1 bg-white bg-opacity-10 rounded-10px'>
        <Heading level={5} children={title} className='text-white uppercase' />
        <Spacing className='pt-4' />
        <Paragraph children={description} className='text-p4-24 font-light text-white text-left w-full' />
      </div>
    </div>
  </div>
);

export default Type8;
