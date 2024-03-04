import { Spacing } from '@atoms';
import { VerticalMenu } from '@molecules';
import { Fragment } from 'react';

const Sidebar = ({ pagesMenu, staticMenu }) => (
  <div className='bg-dark-alpha min-h-full text-white flex flex-col w-60'>
    <Spacing className='pt-5' />
    <VerticalMenu data={pagesMenu} />
    {pagesMenu?.length ? (
      <Fragment>
        <Spacing className='pt-2' />
        <div className='h-1px w-full bg-grey-blue' />
        <Spacing className='pt-2' />
      </Fragment>
    ) : null}

    <VerticalMenu data={staticMenu} />
  </div>
);

export default Sidebar;
