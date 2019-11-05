import { withField } from '@core/shared/formik';
import { useFormik } from 'formik';
import * as React from 'react';
import { Text } from '../text';

/**
 * Group of wrapped components, with props provided according formik context
 */
const Field = {
  Text: withField(Text)
};

export { Field };
