import classNames from 'classnames';
import { useState } from 'react';
import './password-input.scss';

import { InputHintWrapper } from '../../input-hint-wrapper/input-hint-wrapper';
import eyeClosed from './assets/eye-closed.svg';
import eyeOpened from './assets/eye-opened.svg';
import successIcon from './assets/success-icon.svg';

export const PasswordInput = ({
  hasMultipleHints = false,
  keywords = null,
  hasCheckIcon = false,
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
  const [isEdited, setIsEdited] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);

  const [isVisible, setIsVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const { onChange, onBlur, name, ref } = register(inputName, validationSchema);

  const toggleVisibility = () => setIsVisible((prev) => !prev);
  console.log(error);

  const focusHandler = () => {
    if (!isEdited) setIsEdited(true);
    setIsFocused(true);
  };

  return (
    <InputHintWrapper
      error={error}
      hints={hints}
      defaultHint={defaultHint}
      keywords={keywords}
      hasMultipleHints={hasMultipleHints}
      isFocused={isFocused}
    >
      <div className={classNames('password-input', { isInvalid: !isValid })}>
        <div className={classNames('password-input__type-field', { focused: isFocused })}>
          <span className={classNames('password-input__label', { focused: isFocused })}>{placeholder}</span>
          <input
            // {...register(name, validationSchema)}
            onChange={(e) => {
              onChange(e);
              if (e.target.value === '') setIsEmpty(true);
              if (e.target.value !== '') setIsEmpty(false);
            }}
            onBlur={(e) => {
              onBlur(e);
              setIsFocused(false);
            }}
            onFocus={focusHandler}
            ref={ref}
            name={name}
            type={isVisible ? 'text' : 'password'}
            placeholder={placeholder}
            className={classNames('password-input__input', className, { focused: isFocused })}
          />
        </div>

        <div className='password-input__controls'>
          {hasCheckIcon && !isEmpty && !error && (
            <img
              data-test-id='checkmark'
              className='password-input__success-icon'
              src={successIcon}
              alt='success validation'
            />
          )}

          {isEdited ? (
            <button
              onClick={toggleVisibility}
              type='button'
              className='password-input__visibility-button'
              data-test-id={isVisible ? 'eye-opened' : 'eye-closed'}
            >
              <img
                className='password-input__visibility-icon'
                src={isVisible ? eyeOpened : eyeClosed}
                alt='toggle password visibility'
              />
            </button>
          ) : (
            false
          )}
        </div>
      </div>
    </InputHintWrapper>
  );
};
