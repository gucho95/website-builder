import { Button, BUTTON_SIZES, Paragraph, Spacing, Text } from '@atoms';
import { file } from '@babel/types';
import { useRef } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import './index.scss';

const UploadArea = ({ onDrop }) => (
  <div
    className='py-4 flex justify-center w-full text-p5 text-grey-dark text-center rounded-10px upload-area'
    onDragOver={(e) => e.preventDefault()}
    onDrop={onDrop}
  >
    <Text> &#8593;</Text>
    <Spacing className='pl-3' />
    <Text> Drop to upload files or </Text>&nbsp;
    <Text className='font-medium text-blue-light'>browse</Text>
  </div>
);

const UploadedFiles = ({ files, onRemove }) => (
  <div className='grid gap-y-4 max-h-36 overflow-y-auto text-p5 text-grey-dark' onClick={(e) => e.preventDefault()}>
    {files.map((file) => (
      <div className='flex justify-between items-center' key={file.id}>
        <Text children={file.file.name} />
        <Button children='remove' size={BUTTON_SIZES.CUSTOM} onClick={(e) => onRemove(e, file.id)} />
      </div>
    ))}
  </div>
);

const uploadFile = ({ file, onChange }) => {
  const reader = new FileReader();
  reader.onload = function (event) {
    const newFile = { file, url: event.target.result, id: uuidv4(), createdAt: new Date() };
    onChange(newFile);
  };
  reader.readAsDataURL(file);
};

const Uploader = ({ name = 'files', defaultValue = [] }) => {
  const inputRef = useRef(null);
  const { control } = useFormContext();
  const { field } = useController({ control, name, defaultValue });
  const checked = field.value;
  const onChange = (file) => field.onChange([...field.value, file]);

  const onUpload = (e) => {
    const file = e.target.files[0];
    uploadFile({ file, onChange });
    // RESET INPUT VALUE TO TRACK SAME FILE UPLOAD AGAIN
    inputRef.current.value = null;
  };

  const onFileDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    uploadFile({ file, onChange });
    // RESET INPUT VALUE TO TRACK SAME FILE UPLOAD AGAIN
    inputRef.current.value = null;
  };

  const onFileRemove = (e, id) => {
    e.preventDefault();
    const newFiles = field.value.filter((file) => file.id !== id);
    field.onChange(newFiles);
  };
  const id = `input-file-${name}`;

  return (
    <label htmlFor={id} className='flex flex-col justify-center h-full'>
      <UploadArea onDrop={onFileDrop} />
      <Spacing className='pt-5' />
      <UploadedFiles files={field.value} onRemove={onFileRemove} />
      <input type='file' id={id} checked={checked} onChange={onUpload} className='hidden' ref={inputRef} />
    </label>
  );
};

export default Uploader;
