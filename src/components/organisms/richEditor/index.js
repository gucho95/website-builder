import { Editor as RichEditor } from '@tinymce/tinymce-react';
import classNames from 'classnames';
import { useController } from 'react-hook-form';
import './index.scss';

const API_KEY = 'mtyjtpq9pjtk0qt01s6jkhvzivpqkc215377dqkhuevc297n';
const PLUGINS = ['textcolor', 'paste'];
const TOOLBAR = 'undo redo | bold italic underline|forecolor backcolor';
const TEXT_COLOR_MAP = ['red', 'Red'];

const STATES = { ERROR: 'error', BASE: 'base' };

const DEFAULT_CLASSES =
  'min-h-294px max-h-294px bg-blue-light outline-none border-1 border-1px min-h-200px border-grey-dark focus:border-blue-light bg-white outline-none overflow-hidden p-1';

const STATE_CLASSES = {
  [STATES.ERROR]: 'border-danger',
  [STATES.BASE]: 'border-grey-dark focus:border-blue-light',
};

const Editor = (props) => {
  const { className, placeholder, name, ...editorProps } = props;

  const {
    field: { onChange, ref, ...fieldProps },
    fieldState: { error },
  } = useController({ control: props.control, name });

  const stateClasses = error ? STATE_CLASSES[STATES.ERROR] : STATE_CLASSES[STATES.BASE];

  return (
    <div className={classNames(DEFAULT_CLASSES, stateClasses, className)}>
      <RichEditor
        ref={ref}
        apiKey={API_KEY}
        init={{
          menubar: false,
          placeholder,
          plugins: PLUGINS,
          toolbar: TOOLBAR,
          color_map: TEXT_COLOR_MAP,
          paste_auto_cleanup_on_paste: true,
          paste_remove_styles: true,
          paste_remove_styles_if_webkit: true,
          paste_strip_class_attributes: true,
        }}
        outputFormat='html'
        onEditorChange={onChange}
        {...editorProps}
        {...fieldProps}
      />
    </div>
  );
};

export default Editor;
