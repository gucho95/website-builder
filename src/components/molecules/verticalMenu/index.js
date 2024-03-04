import RcMenu, { MenuItem as RcMenuItem } from 'rc-menu';
import { Link, Spacing } from '@atoms';
import { useRouter } from '@hooks';
import './style.scss';

const classes = {
  link: 'flex items-center py-2 px-4',
  icon: '',
  label: 'flex-1 truncate',
};

const Menu = (props) => {
  const { pathname } = useRouter();
  const { menuProps, menuItemProps, data = [] } = props;

  return (
    <RcMenu mode='vertical' activeKey={pathname} {...menuProps}>
      {data.map(({ label, path, id }) => {
        return (
          <RcMenuItem key={path} {...menuItemProps}>
            <Link to={path} className={classes.link}>
              {/* <span children={icon} className={classes.icon} /> */}
              <Spacing className='pl-4' />
              <span children={label} className={classes.label} />
              <Spacing className='pl-1' />
              {/* {count ? <Badge children={count} /> : null} */}
            </Link>
          </RcMenuItem>
        );
      })}
    </RcMenu>
  );
};

export default Menu;
