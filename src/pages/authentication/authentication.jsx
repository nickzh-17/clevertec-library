import axios from 'axios';
import Cookies from 'js-cookie';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { PasswordInput } from '../../components/ui/password-input/password-input';
import { TextInput } from '../../components/ui/text-input/text-input';

import arrow from '../../resources/img/icons/auth-arrow.svg';
import { AuthResult } from './auth-result/auth-result';
import './authentication.scss';

const getInputByType = (inputType) => {
  const compareTable = [
    { type: 'password', element: PasswordInput },
    { type: 'text', element: TextInput },
  ];

  return compareTable.find((item) => item.type === inputType).element;
};

const formData = [
  {
    id: 'auth_input_1',
    name: 'identifier',
    type: 'text',
    title: 'Логин',
    errorTips: [{ type: 'required', message: 'Поле не может быть пустым' }],
    validationSchema: {
      required: true,
    },
  },
  {
    id: 'auth_input_2',
    name: 'password',
    type: 'password',
    title: 'Пароль',
    errorTips: [{ type: 'required', message: 'Поле не может быть пустым' }],
    validationSchema: {
      required: 'it is req!',
    },
  },
];

export const Authentication = ({ setIsAuth }) => {
  const dispatch = useDispatch();
  const [status, setStatus] = useState('authentication');
  const [userData, setUserData] = useState({});
  const [isCorrect, setIsCorrect] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'all' });

  const postAuth = (data, setStatus) => {
    axios
      .post('https://strapi.cleverland.by/api/auth/local', data)
      .then((response) => {
        const { user, jwt } = response.data;
        console.log(user);
        console.log(jwt);

        localStorage.setItem('username', user.username);
        localStorage.setItem('firstName', user.firstName);

        Cookies.set('accessToken', jwt);
        dispatch({ type: 'SET_USER', payload: user });
        setIsAuth(true);
      })
      .catch((axiosError) => {
        console.log(axiosError);

        if (axiosError.response.status === 400) {
          setStatus('incorrectValues');
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
    setUserData(data);
    postAuth(data, setStatus);
  };

  const refetchAuth = () => {
    setStatus('authentication');
    postAuth(userData, setStatus);
  };

  return status === 'randomError' ? (
    <AuthResult onButtonClick={refetchAuth} />
  ) : (
    <div className='authentication'>
      <h2 className='authentication__heading'>Войти в личный кабинет</h2>

      <form data-test-id='auth-form' onSubmit={handleSubmit(onSubmit)} id='auth_form' className='authentication__form'>
        <div className='auth-form__fields'>
          {formData.map((input) => {
            const InputElement = getInputByType(input.type);

            return (
              <InputElement
                error={errors[input.name]}
                register={register}
                validationSchema={input.validationSchema}
                inputName={input.name}
                hints={input.errorTips}
                placeholder={input.title}
                key={input.id}
              />
            );
          })}
        </div>
        {/* <FormField>
          <TextInput
            // defaultValue='zhevnerovnikolay123'
            type='text'
            inputName='identifier'
            placeholder='Логин'
            register={register}
            validationSchema={password.validationSchema}
          />

          {errors.username ? (
            <FormTip errors={errors} name='username' errorTips={[{ type: 'required', message: 'REQQQ' }]} />
          ) : (
            false
          )}
        </FormField>

        <FormField>
          <PasswordInput
            // defaultValue='qwe123QWE'
            type='password'
            inputName='password'
            placeholder='Пароль'
            register={register}
            validationSchema={username.validationSchema}
          />

          {errors.password ? (
            <FormTip errors={errors} name='password' errorTips={[{ type: 'required', message: 'REQQQ' }]} />
          ) : (
            false
          )}
        </FormField> */}

        {status !== 'incorrectValues' ? (
          <Link className='authentication__forgot-link' to='/forgot-pass'>
            Забыли логин или пароль?
          </Link>
        ) : (
          <div className='authentication__incorrect-section'>
            <span className='error-accent' data-test-id='hint'>
              Неверный логин или пароль!
            </span>
            <Link to='/forgot-password'>Восстановить?</Link>
          </div>
        )}

        <button className='authentication__button' type='submit'>
          ВХОД
        </button>
      </form>

      <div className='authentication__controls'>
        <div className='auth-question'>
          <span>Нет учетной записи?</span>
          <Link className='auth-question__link' to='/registration'>
            <span>РЕГИСТРАЦИЯ</span>
            <img src={arrow} alt='back-arrow' />
          </Link>
        </div>
      </div>
    </div>
  );
};
