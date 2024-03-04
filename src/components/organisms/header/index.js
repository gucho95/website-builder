import { Link, Text } from '@atoms';
import { ROUTES } from '@constants/routes';
import { Container } from '@organisms/';

const Header = (props) => (
  <header {...props}>
    <Container className='bg-blue-500'>
      <nav className='py-2 flex justify-between'>
        <div className='text-white flex items-center'>
          <svg
            className='fill-current h-8 w-8 mr-2'
            width='54'
            height='54'
            viewBox='0 0 54 54'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z' />
          </svg>
          <Text>Tailwind CSS</Text>
        </div>

        <div className='flex items-center justify-between '>
          <ul className='text-xs flex list-none gap-x-2'>
            {ROUTES.filter((i) => i.isMenuItem).map(({ path, key }) => (
              <li key={key}>
                <Link to={path}>
                  <Text children={key} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </Container>
  </header>
);

export default Header;
