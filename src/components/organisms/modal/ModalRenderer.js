import Dialog from 'rc-dialog';
import { useDispatch, useSelector } from 'react-redux';
import { selectModalData } from '@selectors/ui';
import { CREATE_REDIRECT, EXAMPLE, FILE_MANAGER, MEDIA } from '@constants/modals';
import ui from '@actions/ui';
import Example from './types/Example';
import FileManager from './types/FileManager';
import CreateRedirect from './types/CreateRedirect';
import Media from './types/Media';
import './index.scss';

const BodyRenderer = {
  [EXAMPLE]: Example,
  [FILE_MANAGER]: FileManager,
  [CREATE_REDIRECT]: CreateRedirect,
  [MEDIA]: Media,
};

const ModalRenderer = () => {
  const dispatch = useDispatch();
  const { modal } = useSelector(selectModalData);
  const visible = !!modal?.type;
  const type = modal?.type;
  const params = modal?.data;
  const closeModal = () => dispatch(ui.closeModal());
  const Body = BodyRenderer[type];

  return visible ? (
    <Dialog
      visible={true}
      onClose={closeModal}
      children={<Body params={params} closeModal={closeModal} />}
      {...params?.modal}
    />
  ) : null;
};

export default ModalRenderer;
