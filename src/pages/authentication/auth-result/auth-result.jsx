import { LargeButton } from '../../../components/ui/large-button';
import './auth-result.scss';

export const AuthResult = ({ onButtonClick }) => (
  <div className='auth-result' data-test-id='status-block'>
    <h2 className='auth-result__heading'>Вход не выполнен</h2>
    <p className='auth-result__text'>Что-то пошло не так. Попробуйте еще раз</p>
    <LargeButton className='auth-result__button' onClick={onButtonClick}>
      Повторить
    </LargeButton>
  </div>
);
