import { useState } from 'react';
import './auth-form.scss';

export const AuthForm = () => {
  const [userName, setUserName] = useState('');

  return (
    <form id='auth' className='login__form'>
      <AuthInput
        type='text'
        placeholder='Придумайте логин для входа'
        tip='Используйте для логина латинский алфавит и цифры'
      />
      <AuthInput type='text' placeholder='Пароль' tip='Пароль не менее 8 символов, с заглавной буквой и цифрой' />
    </form>
  );
};
