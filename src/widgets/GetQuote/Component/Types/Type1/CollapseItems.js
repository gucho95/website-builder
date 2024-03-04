import { Spacing, Text, Button, Checkbox } from '@atoms';
import classNames from 'classnames';
import Menu, { MenuItem } from 'rc-menu';

const ArrowUp = () => <Text>&#8593;</Text>;
const ArrowDown = () => <Text>&#8595;</Text>;

export const CollapseMenu = () => (
  <Menu className='text-p5'>
    <MenuItem className='px-7 py-5'>
      <Checkbox name='a1' before={<Text className=''>Do you need us to design your signs?</Text>} />
    </MenuItem>
    <MenuItem className='px-7 py-5'>
      <Checkbox name='a2' before={<Text className='flex-1'>Where do you plan to display your sign(s)?</Text>} />
    </MenuItem>
    <MenuItem className='px-7 py-5'>
      <Checkbox
        name='a3'
        before={<Text className='flex-1'>Do you know if you need illuminated or non-illuminated sign?</Text>}
      />
    </MenuItem>
    <MenuItem className='px-7 py-5'>
      <Checkbox name='a4' before={<Text className='flex-1'>Do you know the sizes of your sign?</Text>} />
    </MenuItem>
    <MenuItem className='px-7 py-5'>
      <Checkbox name='a5' before={<Text className='flex-1'>Do you need us to install your signs?</Text>} />
    </MenuItem>
    <MenuItem className='w-full flex flex-col py-5 px-7'>
      <Text className='flex-1'>Please select the service/s you require</Text>
      <Spacing className='pt-5' />
      <div className='bg-grey-blue p-5 rounded-12px grid gap-y-5 text-p5'>
        <div className='flex space-x-2'>
          <Checkbox name='a' after={<Text>3D Signage Rendering</Text>} />
          <Checkbox name='b' after={<Text>Cutting and Engraving </Text>} />
          <Checkbox name='c' after={<Text>Large Format Printing</Text>} />
          <Checkbox name='d' after={<Text>Permitting</Text>} />
        </div>
        <div className='flex space-x-2'>
          <Checkbox name='e' after={<Text>Manufacturing and Installation</Text>} />
          <Checkbox name='f' after={<Text>Sign Painting</Text>} />
          <Checkbox name='g' after={<Text>Sign Repair and Replacement</Text>} />
        </div>
      </div>
    </MenuItem>
  </Menu>
);

export const CollapseButton = ({ menuVisible, onClick, visible = true }) => (
  <Button
    className={classNames('text-left flex items-center text-p4-24 p-5', visible ? 'visible' : 'invisible')}
    onClick={onClick}
  >
    <Text>
      Please click here and answer the questions in the dropdown window. The more we know about your project(s) the
      faster you’ll get the accurate quote.
    </Text>
    {menuVisible ? <ArrowUp /> : <ArrowDown />}
  </Button>
);

export const Collapse = ({ menuVisible, setMenuVisible }) => (
  <div className='relative'>
    <div className={classNames('border-1px border-blue-dark rounded-10px', menuVisible ? 'absolute' : 'static')}>
      <CollapseButton menuVisible={menuVisible} onClick={() => setMenuVisible(!menuVisible)} visible={true} />
      <div className={classNames('top-full left-0 w-full flex-col bg-white', menuVisible ? 'flex' : 'hidden')}>
        <CollapseMenu />
      </div>
    </div>
  </div>
);
