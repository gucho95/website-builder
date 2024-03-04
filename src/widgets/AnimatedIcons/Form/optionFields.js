import { generateTextField, IMAGE_FIELD } from '@constants/fields';
import { TYPES } from '../types';

export const TYPE_FIELDS = {
  [TYPES[0].value]: [
    IMAGE_FIELD,
    [
      generateTextField({ placeholder: 'Text 1' }),
      generateTextField({ placeholder: 'Text 2' }),
      generateTextField({ placeholder: 'Text 3' }),
      generateTextField({ placeholder: 'Text 4' }),
    ],
  ],
};
