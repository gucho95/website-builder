const { Heading, Spacing } = require('@atoms');

const Page404 = () => {
  return (
    <div className='perfect-center flex-col w-64 mx-auto'>
      <Spacing className='pt-32' />
      <Heading level={1} children='Error 404' />
      <Spacing className='pt-2' />
      <div className='h-1px bg-grey-dark w-full' />
      <Spacing className='pt-4' />
      <Heading level={3} children='Page not found' />
    </div>
  );
};

export default Page404;
