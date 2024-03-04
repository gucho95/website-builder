import { Button, BUTTON_TYPES, Text } from '@atoms';
import { useRouter } from '@hooks';
import { PATHS } from '@constants/paths';

const Header = () => {
  const { history, params } = useRouter();
  const onBack = () => history.push(`${PATHS.DASHBOARD}/pages/${params.page}`);
  return (
    <Button type={BUTTON_TYPES.LINK} onClick={onBack}>
      <Text className='text-p2 text-dark-beta'>&#60; Back</Text>
    </Button>
  );
};

export default Header;
