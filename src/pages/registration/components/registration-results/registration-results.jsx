import { useNavigate } from 'react-router-dom';
import { LargeButton } from '../../../../components/ui/large-button';
import './registration-results.scss';

export const RegistrationResult = ({ userData, status, setStatus, resetForm, refetchForm }) => {
  const navigate = useNavigate();
  console.log(status);

  const results = [
    {
      status: 'registred',
      heading: 'Регистрация успешна',
      text: 'Регистрация прошла успешно. Зайдите в личный кабинет, используя свои логин и пароль',
      buttonText: 'ВХОД',
      buttonAction: () => navigate('/auth'),
    },
    {
      status: 'dataDidNotSave',
      heading: 'Данные не сохранились',
      text: 'Что-то пошло не так и ваша регистрация не завершилась. Попробуйте ещё раз',
      buttonText: 'ПОВТОРИТЬ',
      buttonAction: () => {
        refetchForm();
      },
    },
    {
      status: 'nonuniqueData',
      heading: 'Данные не сохранились',
      text: 'Такой логин или e-mail уже записан в системе. Попробуйте зарегистрироваться по другому логину или e-mail',
      buttonText: 'НАЗАД К РЕГИСТРАЦИИ',
      buttonAction: () => {
        resetForm();
      },
    },
  ];

  const currentResult = results.find((result) => result.status === status);

  return (
    <div data-test-id='status-block' className='registration-result'>
      <h2 className='registration-result__heading'>{currentResult.heading}</h2>
      <p className='registration-result__text'>{currentResult.text}</p>
      <LargeButton className='registration-result__button' onClick={currentResult.buttonAction}>
        {currentResult.buttonText}
      </LargeButton>
    </div>
  );
};
