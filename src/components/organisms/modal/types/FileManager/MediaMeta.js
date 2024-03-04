import { Button, BUTTON_HTML_TYPES, BUTTON_TYPES, Input, Textarea } from '@atoms';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import mediaActions from '@actions/media';
import { useRef } from 'react';
import { toast } from 'react-toastify';
const { REACT_APP_ROOT } = process.env;

const MediaMeta = ({ selectedMedia, find, setSelectedMediaId, selectable, onMediaSelect }) => {
  const { comment, description, caption, altText, permalink, id, displayName, relativePath } = selectedMedia;
  const pathFieldRef = useRef();
  const { register, handleSubmit } = useForm({
    defaultValues: { comment, description, displayName, caption, altText, permalink, relativePath },
  });

  const dispatch = useDispatch();
  const resetActiveMedia = () => setSelectedMediaId(null);
  const updateMedia = (payload) => dispatch(mediaActions.update(payload));
  const removeMedia = () => {
    dispatch(
      mediaActions.remove({
        params: { image: [id] },
        afterSuccess: () => {
          find();
          resetActiveMedia();
        },
      })
    );
  };

  const onFormSuccess = (values) => {
    updateMedia({
      ...values,
      id,
      afterSuccess: () => {
        find();
        toast.success('Successfully updated', { autoClose: 1000 });
      },
    });
  };

  const onFormError = (errors) => console.log(`errors`, errors);

  const onPathFieldClick = () => {
    pathFieldRef.current.select();
    document.execCommand('copy');
    toast.success('File url copied', { autoClose: 1000 });
  };

  return (
    <form className='grid gap-y-2' onSubmit={handleSubmit(onFormSuccess, onFormError)}>
      <Input value={relativePath} labelText='File URL' onClick={onPathFieldClick} ref={pathFieldRef} />
      <Input {...register('displayName')} labelText='title' />
      <Input {...register('altText')} labelText='Title' />
      <Textarea {...register('description')} labelText='Description' />
      <Button
        type={BUTTON_TYPES.DANGER}
        htmlType={BUTTON_HTML_TYPES.BUTTON}
        children='Remove'
        className='w-full'
        onClick={removeMedia}
      />
      <Button type={BUTTON_TYPES.SECONDARY} htmlType={BUTTON_HTML_TYPES.SUBMIT} children='Update' className='w-full' />

      {selectable ? (
        <Button
          type={BUTTON_TYPES.PRIMARY}
          htmlType={BUTTON_HTML_TYPES.BUTTON}
          children='Select'
          className='w-full'
          onClick={() => onMediaSelect({ relativePath })}
        />
      ) : null}
    </form>
  );
};

export default MediaMeta;
