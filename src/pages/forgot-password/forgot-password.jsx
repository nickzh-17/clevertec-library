import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import backArrow from '../../resources/img/icons/back-arrow-icon.svg';
import './forgot-password.scss';

import { EmailInput } from '../../components/ui/email-input/email-input';
import arrow from '../../resources/img/icons/auth-arrow.svg';
import { ForgotResult } from './forgot-result/forgot-result';

const emailData = {
  name: 'email',
  type: 'email',
  title: 'E-mail',
  keywords: [
    { key: 'minLength', string: 'не менее 8 символов' },
    { key: 'upperLetter', string: 'заглавной буквой' },
    { key: 'number', string: 'цифрой' },
  ],
  errorTips: [
    { type: 'required', message: 'Поле не может быть пустым' },
    { type: 'pattern', message: 'Введите корректный e-mail' },
  ],
  validationSchema: {
    required: true,
    pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
  },
};

export const ForgotPassword = () => {
  const { code } = useParams();
  const dispatch = useDispatch();
  const [status, setStatus] = useState('sending');

  const {
    register,
    handleSubmit,
    formState: { errors },
    // errors,
    reset,
  } = useForm({ mode: 'all', validateCriteriaMode: 'all' });

  const postForgot = (data, setStatus) => {
    console.log(data);
    axios
      .post('https://strapi.cleverland.by/api/auth/forgot-password', data)
      .then((response) => {
        console.log(response);
        setStatus('forgotSendSuccess');
      })
      .catch((axiosError) => {
        console.log(axiosError);

        if (!axiosError.response || axiosError.response.status.toString(10).at(0) !== '2') {
          setStatus('randomError');
        }
        return null;
      });
  };

  const onSubmit = (data) => {
    console.log(data);
    postForgot(data, setStatus);
  };

  return status === 'forgotSendSuccess' ? (
    <ForgotResult />
  ) : (
    <div className='forgot-password'>
      <div className='forgot-password__head'>
        <Link className='forgot-password__link-auth' to='/auth'>
          <img src={backArrow} alt='back-arrow' />
          <span>Вход в личный кабинет{code}</span>
        </Link>
      </div>
      <div className='forgot-password__body'>
        <h2 className='authentication__heading'>Восстановление пароля</h2>

        <form
          data-test-id='send-email-form'
          onSubmit={handleSubmit(onSubmit)}
          id='form_forgot'
          className='forgot-password__form'
        >
          <EmailInput
            keywords={emailData.keywords}
            register={register}
            validationSchema={emailData.validationSchema}
            error={errors[emailData.name]}
            hints={emailData.errorTips}
            defaultHint={emailData.defaultHint}
            inputName={emailData.name}
            placeholder={emailData.title}

            // validationSchema={password.validationSchema}
          />
          {status === 'randomError' && (
            <div data-test-id='hint' className='forgot-password__error'>
              error
            </div>
          )}

          <div className='forgot-password__info'>
            На этот email будет отправлено письмо с инструкциями по восстановлению пароля
          </div>

          <button className='forgot-password__button' form='form_forgot' type='submit'>
            восстановить
          </button>
        </form>

        <div className='forgot-password__controls'>
          <div className='forgot-question'>
            <span>Нет учетной записи?</span>
            <Link className='forgot-question__link' to='/registration'>
              <span>РЕГИСТРАЦИЯ</span>
              <img src={arrow} alt='back-arrow' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
