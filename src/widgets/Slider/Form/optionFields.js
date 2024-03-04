import {
  BUTTON_TEXT_FIELD,
  DESCRIPTION_FIELD,
  generateButtonField,
  generateTextField,
  IMAGE_FIELD,
  RICH_TITLE_FIELD,
  VIDEO_FIELD,
} from '@constants/fields';
import { TYPES } from '../types';

export const TYPE_FIELDS = {
  [TYPES[0].value]: [RICH_TITLE_FIELD, BUTTON_TEXT_FIELD, VIDEO_FIELD],
  [TYPES[1].value]: [RICH_TITLE_FIELD, BUTTON_TEXT_FIELD, DESCRIPTION_FIELD, IMAGE_FIELD],
  [TYPES[2].value]: [
    generateTextField({ name: 'breadcrumbPrimary', placeholder: 'Breadcrumb primary text' }),
    generateTextField({ name: 'breadcrumbSecondary', placeholder: 'Breadcrumb secondary text' }),
    RICH_TITLE_FIELD,
    DESCRIPTION_FIELD,
    generateButtonField({ name: 'button1', placeholder: 'First button text' }),
    generateButtonField({ name: 'button2', placeholder: 'Second button text' }),
    IMAGE_FIELD,
  ],
  [TYPES[3].value]: [
    RICH_TITLE_FIELD,
    DESCRIPTION_FIELD,
    generateTextField({ name: 'searchPlaceholder', placeholder: 'Search field placeholder' }),
    IMAGE_FIELD,
  ],
  [TYPES[4].value]: [RICH_TITLE_FIELD, BUTTON_TEXT_FIELD, DESCRIPTION_FIELD, IMAGE_FIELD],
  [TYPES[5].value]: [
    generateTextField({ name: 'breadcrumbPrimary', placeholder: 'Breadcrumb primary text' }),
    generateTextField({ name: 'breadcrumbSecondary', placeholder: 'Breadcrumb secondary text' }),
    RICH_TITLE_FIELD,
    DESCRIPTION_FIELD,
    BUTTON_TEXT_FIELD,
    IMAGE_FIELD,
  ],
};
