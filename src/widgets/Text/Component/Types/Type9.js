import { Heading, Paragraph, Spacing } from '@atoms';

const Type9 = ({ title, description }) => (
  <div className='bg-blue-hover'>
    <div className='w-345px mx-auto'>
      <div className='h-1px w-full bg-white  bg-opacity-50' />
      <Spacing className='pt-7' />
      <div>
        <Heading level={3} children={title} className='text-white uppercase' />
        <Spacing className='pt-4' />
        <Paragraph children={description} className='text-p5 font-light text-white text-left w-full' />
      </div>
    </div>
  </div>
);

export default Type9;
