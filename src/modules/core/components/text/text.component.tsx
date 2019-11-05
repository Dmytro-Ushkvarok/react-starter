import * as React from 'react';
import { TextProps } from './text.props';
import * as styles from './text.scss';

/**
 * Renders Text
 */
const Text: React.FC<TextProps> = ({
  id,
  value,
  type,
  placeholder,
  onChange,
  onTouch,
  touched,
  label,
  tabIndex
}) => (
  <div className={styles.text}>
    {label && <label htmlFor={id}>{label}</label>}
    <input
      id={id}
      type={type}
      value={value}
      tabIndex={tabIndex}
      placeholder={placeholder}
      onChange={event => {
        onChange(event.target.value);
        onTouch();
      }}
    />
  </div>
);

/**
 * Defaults
 */
Text.defaultProps = {
  type: 'text',
  onTouch: () => {},
  onChange: () => {}
};

export { Text };
