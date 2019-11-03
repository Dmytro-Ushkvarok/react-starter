import * as React from 'react';
import { TextProps } from './text.props';
import * as styles from './text.scss';

/**
 * Renders Text
 */
const Text: React.FC<TextProps> = ({}) => (
  <div className={styles.text}>
    <input type='text' />
  </div>
);

export { Text };
