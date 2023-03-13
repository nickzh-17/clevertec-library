import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FormField } from '../../components/ui/form-field/form-field';
import { FormTip } from '../../components/ui/form-tip/form-tip';
import { TextInput } from '../../components/ui/text-input/text-input';
import backArrow from '../../resources/img/icons/back-arrow-icon.svg';
import './forgot-password.scss';

import arrow from '../../resources/img/icons/auth-arrow.svg';

export const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => console.log('submit');

  return (
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
          <FormField>
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
          </FormField>
        </form>

        <div className='forgot-password__controls'>
          <button className='forgot-password__button' form='form_forgot' type='submit'>
            восстановить
          </button>
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
