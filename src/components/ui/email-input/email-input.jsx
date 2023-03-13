import classNames from 'classnames';
import { useState } from 'react';
import { InputHintWrapper } from '../../input-hint-wrapper/input-hint-wrapper';
import './email-input.scss';

export const EmailInput = ({
  hasMultipleHints = false,
  keywords = null,
  inputName,
  hints,
  defaultHint = '',
  register,
  error,
  validationSchema,
  className,
  placeholder,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const { onChange, onBlur, name, ref } = register(inputName, validationSchema);

  const test = { inputName, hints, defaultHint, error, validationSchema, keywords };
  console.log(test);

  return (
    <InputHintWrapper
      error={error}
      hints={hints}
      defaultHint={defaultHint}
      keywords={keywords}
      hasMultipleHints={hasMultipleHints}
      isFocused={isFocused}
      isEmpty={isEmpty}
    >
      <div className={classNames('email-input', { focused: isFocused })}>
        <span className={classNames('email-input__label', { focused: isFocused })}>{placeholder}</span>
        <input
          onChange={(e) => {
            onChange(e);
            if (e.target.value === '') setIsEmpty(true);
            if (e.target.value !== '') setIsEmpty(false);
          }}
          onBlur={(e) => {
            onBlur(e);
            setIsFocused(false);
          }}
          name={name}
          ref={ref}
          placeholder={placeholder}
          className={classNames('email-input__input', className, { focused: isFocused })}
          onFocus={() => setIsFocused(true)}
        />
      </div>
    </InputHintWrapper>
  );
};
