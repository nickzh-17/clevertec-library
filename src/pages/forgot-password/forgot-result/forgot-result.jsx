import './forgot-result.scss';

export const ForgotResult = () => (
  <div className='forgot-result' data-test-id='status-block'>
    <h2 className='forgot-result__heading'>Письмо выслано</h2>
    <p className='forgot-result__text'>
      Перейдите в вашу почту, чтобы воспользоваться подсказками по восстановлению пароля
    </p>
  </div>
);
