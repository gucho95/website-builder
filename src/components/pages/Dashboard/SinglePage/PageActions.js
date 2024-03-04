import { Button, BUTTON_TYPES, Heading, Link, Spacing, BUTTON_SIZES } from '@atoms';

const classes = {
  pageLink: 'underline',
  header: 'sticky top-0 bg-grey-body z-50',
  headerWrapper: 'flex justify-between items-center w-full',
  actionWrapper: 'flex items-center space-x-4',
};

const PageActions = ({ page, data, onRemove }) => {
  return (
    <div className={classes.header}>
      <Spacing className='pt-2' />
      <div className={classes.headerWrapper}>
        <Heading level={3} children={data?.title} />
        <div className={classes.actionWrapper}>
          <Button type={BUTTON_TYPES.DANGER} size={BUTTON_SIZES.SMALL} children='Remove page' onClick={onRemove} />
          <Link to={`/pages/${page}`} className={classes.pageLink}>
            <Button type={BUTTON_TYPES.PRIMARY} size={BUTTON_SIZES.SMALL} children='See page' />
          </Link>
        </div>
      </div>
      <Spacing className='pt-2 ' />
      <div className='w-full h-1px bg-grey-light' />
    </div>
  );
};

export default PageActions;
