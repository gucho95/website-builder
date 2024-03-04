import { CATEGORY_FIELD, DESCRIPTION_FIELD, IMAGE_FIELD, TITLE_FIELD } from '@constants/fields';
import { TYPES } from '../types';

export const TYPE_FIELDS = {
  [TYPES[0].value]: [TITLE_FIELD, DESCRIPTION_FIELD, IMAGE_FIELD, CATEGORY_FIELD],
};
