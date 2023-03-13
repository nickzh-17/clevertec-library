import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FormTip } from '../../components/ui/form-tip/form-tip';
import { TextInput } from '../../components/ui/text-input/text-input';
import backArrow from '../../resources/img/icons/back-arrow-icon.svg';
import './forgot-password.scss';

import arrow from '../../resources/img/icons/auth-arrow.svg';
import { ForgotResult } from './forgot-result/forgot-result';

export const ForgotPassword = () => {
  const dispatch = useDispatch();
  const [status, setStatus] = useState('sending');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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

        if (axiosError.response.status === 400) {
          setStatus('sendError');
          console.log(222);
          return;
        }

        if (!axiosError.response || axiosError.response.status.toString(10).at(0) !== '2') {
          setStatus('randomError');
        }
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
          <span>Вход в личный кабинет</span>
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
          <TextInput
            type='text'
            inputName='email'
            placeholder='Email'
            register={register}
            // validationSchema={password.validationSchema}
          />

          <FormTip
            defaultTip='На этот email  будет отправлено письмо с инструкциями по восстановлению пароля'
            errors={errors}
            name='email'
            errorTips={[{ type: 'required', message: 'REQQQ' }]}
          />

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
