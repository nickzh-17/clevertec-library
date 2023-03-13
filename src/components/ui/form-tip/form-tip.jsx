import classNames from 'classnames';
import './form-tip.css';

const getErrorTip = (type, tips) => {
  const tip = tips.find((tip) => tip.type === type);
  return tip.message;
};

export const FormTip = ({ defaultTip, errorTips, errors, name }) => {
  const sss = 5;

  return (
    <div className={classNames('form-tip', { error: errors[name] })}>
      {errors[name] ? getErrorTip(errors[name].type, errorTips) : defaultTip}
    </div>
  );
};
