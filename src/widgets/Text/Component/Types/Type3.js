import { Paragraph } from '@atoms';

const Type3 = ({ description }) => (
  <div className='shadow-1 w-970px max-w-full py-8 px-48 mx-auto rounded-12px'>
    <Paragraph className='text-dark text-center text-p1' children={description} />
  </div>
);

export default Type3;
