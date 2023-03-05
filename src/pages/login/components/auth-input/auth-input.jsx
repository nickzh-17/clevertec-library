import './auth-input.scss';

export const AuthInput = ({ tip, ...props }) => (
  <div className='auth-input'>
    <input className='auth-input__input' {...props} />
    <div className='auth-input__tip'>{tip}</div>
  </div>
);
