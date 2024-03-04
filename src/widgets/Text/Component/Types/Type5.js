import { Heading, Paragraph, Spacing } from '@atoms';

const Type5 = ({ title, description }) => (
  <div className='shadow-2 p-7 w-718px max-w-full mx-auto rounded-10px'>
    <Heading level={4} children={title} className='text-blue-light uppercase' />
    <Spacing className='pt-4' />
    <Paragraph children={description} className='text-p5 font-light text-dark text-justify w-full' />
  </div>
);

export default Type5;
