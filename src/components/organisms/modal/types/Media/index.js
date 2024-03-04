import {
  BUTTON_HTML_TYPES,
  Heading,
  Spacing,
  Input,
  Button,
  BUTTON_TYPES,
  Textarea,
  TEXT_TYPES,
  Paragraph,
  Text,
  BUTTON_SIZES,
} from '@atoms';
import { generateMediaSrc } from '@utils';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import mediaActions from '@actions/media';
import { DateTime } from 'luxon';
import MediaItem from '@pages/Dashboard/Media/MediaItem';

const Media = ({ params, closeModal }) => {
  const {
    comment,
    description,
    caption,
    mimetype,
    altText,
    permalink,
    id,
    displayName,
    relativePath,
    createdAt,
    removeMedia,
    size,
  } = params;
  const pathFieldRef = useRef();
  const { register, handleSubmit } = useForm({
    defaultValues: { comment, description, displayName, caption, altText, permalink, relativePath },
  });
  const dispatch = useDispatch();
  const updateMedia = (payload) => dispatch(mediaActions.update(payload));
  const find = (payload) => dispatch(mediaActions.find(payload));
  const fileSize = size ? parseInt(size / 1024) : null;

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
    toast.success('File url copied', { autoClose: 1000, toastId: 1 });
  };

  return (
    <div className='w-80vw overflow-hidden max-w-full'>
      <Heading level={3} children='Edit file' />
      <Spacing className='pt-3' />
      <div className='flex'>
        <div className='w-6/12'>
          <div children={MediaItem({ relativePath, mimetype }, false)} className='w-full' />
          <Paragraph>
            <Text type={TEXT_TYPES.BOLD} children='Uploaded on : ' className='text-p5' />
            <Text children={DateTime.fromISO(createdAt).toLocaleString(DateTime.DATETIME_MED)} className='text-p5' />
          </Paragraph>
          <Paragraph>
            <Text type={TEXT_TYPES.BOLD} children='Uploaded by : ' className='text-p5' />
            <Text children='Name Surname' className='text-p5' />
          </Paragraph>
          <Paragraph className='flex items-center'>
            <Text type={TEXT_TYPES.BOLD} children='File url : ' className='text-p5' />
            <Text children={generateMediaSrc(params.relativePath)} className='text-p5 flex-1 truncate' />

            <Input
              value={generateMediaSrc(params.relativePath)}
              ref={pathFieldRef}
              className='absolute top-0 -left-96 z-0 w-20'
            />
            <Spacing className='pl-2' />
            <Button
              type={BUTTON_TYPES.SECONDARY}
              size={BUTTON_SIZES.CUSTOM}
              children='Copy URL to clipboard'
              onClick={onPathFieldClick}
              className='px-2'
            />
          </Paragraph>
          <Paragraph>
            <Text type={TEXT_TYPES.BOLD} children='File created : ' className='text-p5' />
            <Text children={DateTime.fromISO(createdAt).toLocaleString(DateTime.DATETIME_MED)} className='text-p5' />
          </Paragraph>
          <Paragraph>
            <Text type={TEXT_TYPES.BOLD} children='File size : ' className='text-p5' />
            <Text children={fileSize ? `${fileSize}kb` : '--'} className='text-p5' />
          </Paragraph>
          <Paragraph>
            <Text type={TEXT_TYPES.BOLD} children='File type : ' className='text-p5' />
            <Text children={mimetype} className='text-p5' />
          </Paragraph>
          <Paragraph>
            <Text type={TEXT_TYPES.BOLD} children='Dimension : ' className='text-p5' />
            <Text children={'--'} className='text-p5' />
          </Paragraph>
          <Paragraph>
            <Text type={TEXT_TYPES.BOLD} children='Original image : ' className='text-p5' />
            <a
              download
              href={generateMediaSrc(relativePath)}
              children={displayName}
              target='_blank'
              className='text-blue-light text-p5'
              rel='noreferrer'
            />
          </Paragraph>
        </div>
        <Spacing className='pl-5' />
        <div className='w-6/12 flex flex-col'>
          <form className='grid gap-y-2 w-full' onSubmit={handleSubmit(onFormSuccess, onFormError)}>
            <Input {...register('displayName')} labelText='Title' />
            <Input {...register('altText')} labelText='Alt text' />
            <Textarea {...register('description')} labelText='Description' />
            <Spacing className='pt-2' />
            <Button
              type={BUTTON_TYPES.DANGER}
              htmlType={BUTTON_HTML_TYPES.BUTTON}
              children='Remove'
              className='w-full'
              onClick={() =>
                removeMedia({
                  id,
                  afterSuccess: () => {
                    closeModal();
                  },
                })
              }
            />
            <Button
              type={BUTTON_TYPES.SECONDARY}
              htmlType={BUTTON_HTML_TYPES.SUBMIT}
              children='Update'
              className='w-full'
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Media;
