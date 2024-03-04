import { Input, MediaField, Textarea } from '@atoms';
import { CreatableSelect } from '@molecules';
import { RichEditor } from '@organisms';

const urlPattern =
  /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/g;
const imageUrlPattern = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/i;

export const TEXT_FIELD = { component: Input, name: 'text', rules: { required: true }, placeholder: 'Text' };

export const TITLE_FIELD = { component: Input, name: 'title', rules: { required: true }, placeholder: 'Title' };
export const generateTextField = (props) => ({ ...TEXT_FIELD, ...props });
export const generateButtonField = (props) => ({ ...BUTTON_TEXT_FIELD, ...props });
export const generateRichField = (props) => ({ ...RICH_CONTENT_FIELD, ...props });

export const DESCRIPTION_FIELD = {
  component: Textarea,
  name: 'description',
  rules: { required: true },
  placeholder: 'Description',
};

export const RICH_CONTENT_FIELD = {
  component: RichEditor,
  name: 'content',
  rules: { required: true },
  placeholder: 'Content',
};

export const RICH_TITLE_FIELD = {
  component: RichEditor,
  name: 'title',
  rules: { required: true },
  placeholder: 'Title',
};

export const BUTTON_TEXT_FIELD = {
  component: Input,
  name: 'buttonText',
  rules: { required: true },
  placeholder: 'Button text',
};

export const IMAGE_FIELD = {
  component: MediaField,
  name: 'image',
  placeholder: 'Image url',
};

export const VIDEO_FIELD = {
  component: MediaField,
  name: 'video',
  placeholder: 'Video url',
};

export const RATE_FIELD = {
  component: Input,
  name: 'rate',
  rules: {
    required: true,
    min: 0,
    max: 5,
  },
  placeholder: 'Rate value ( 0-5 )',
};

export const BREADCRUMB_FIELD = {
  component: Input,
  name: 'breadcrumb',
  rules: { required: true },
  placeholder: 'Breadcrumb',
};

export const CATEGORY_FIELD = {
  component: CreatableSelect,
  name: 'category',
  rules: { required: true },
  placeholder: 'Select category',
};
