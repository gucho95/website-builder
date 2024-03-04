import { Button, BUTTON_TYPES, Heading, Paragraph, Spacing } from '@atoms';

const Type6 = ({ title, description, buttonText }) => (
  <div className='shadow-3 py-10 px-32 w-718px mx-auto text-center rounded-10px'>
    <Heading level={3} children={title} className='text-dark uppercase' />
    <Spacing className='pt-5' />
    <Paragraph children={description} className='text-p3-28 font-light text-dark w-full' />
    <Spacing className='pt-7' />
    <Button type={BUTTON_TYPES.PRIMARY} children={buttonText} className='uppercase' />
  </div>
);

export default Type6;
