import { LargeButton } from '../../components/ui/large-button';
import { LoginState } from './components/login-state/login-state';
import './login.scss';

export const Login = () => (
  <div className='login__wrapper'>
    <div className='login__content'>
      <h1 className='login__site'>Cleverland</h1>

      <div className='login__frame'>
        <div className='login__head'>
          <h2 className='login__heading'>Регистрация</h2>
          <LoginState />
        </div>

        <div className='login__controls'>
          <LargeButton>Следующий шаг</LargeButton>
          <div>Есть акк? - войти</div>
        </div>
      </div>
    </div>
  </div>
);
