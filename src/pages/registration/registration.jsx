import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import axios from 'axios';

import { TextInput } from '../../components/ui/text-input/text-input';
import { RegistrationState } from './components/registration-state/registration-state';
import './registration.scss';

import { EmailInput } from '../../components/ui/email-input/email-input';
import { PasswordInput } from '../../components/ui/password-input/password-input';
import { PhoneInput } from '../../components/ui/phone-input/phone-input';
import { formData } from '../../constants/registration-fields';
import authArrow from '../../resources/img/icons/auth-arrow.svg';
import { RegistrationResult } from './components/registration-results/registration-results';

const getInputByType = (inputType) => {
  const compareTable = [
    { type: 'password', element: PasswordInput },
    { type: 'text', element: TextInput },
    { type: 'email', element: EmailInput },
    { type: 'tel', element: PhoneInput },
  ];

  const compareResult = compareTable.find((item) => item.type === inputType);
  return compareResult ? compareResult.element : TextInput;
};

export const Registration = () => {
  const dispatch = useDispatch();
  const maxStep = useSelector((store) => store.registrationReducer.maxStep);
  const [status, setStatus] = useState('registration');
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
    // errors,
    reset,
  } = useForm({ mode: 'all', validateCriteriaMode: 'all' });

  const postForm = async (data, setStatus) => {
    dispatch({ type: 'START_FETCHING' });

    axios
      .post('https://strapi.cleverland.by/api/auth/local/register', data)
      .then((response) => setStatus('registred'))
      .catch((axiosError) => {
        console.log(axiosError);

        if (!axiosError.response) {
          setStatus('dataDidNotSave');
          dispatch({ type: 'END_FETCHING' });
          return;
        }

        if (axiosError.response.status === 400) {
          setStatus('nonuniqueData');
          dispatch({ type: 'END_FETCHING' });
          return;
        }

        setStatus('dataDidNotSave');
        dispatch({ type: 'END_FETCHING' });
      });
  };

  const finishStep = async (data) => {
    if (currentStep < maxStep) {
      setCurrentStep((prev) => prev + 1);
      return;
    }

    if (currentStep === maxStep) {
      setUserData(data);
      await postForm(data, setStatus);
    }
  };

  const onSubmit = (data) => {
    finishStep(data);
  };

  const resetForm = () => {
    reset();
    setCurrentStep(1);
    setStatus('registration');
  };

  const refetchForm = () => {
    setStatus('registration');
    postForm(userData, setStatus);
  };

  return status !== 'registration' ? (
    <RegistrationResult
      userData={userData}
      status={status}
      setStatus={setStatus}
      resetForm={resetForm}
      refetchForm={refetchForm}
    />
  ) : (
    <div className='registration'>
      <div className='registration__head'>
        <h2 className='registration__heading'>Регистрация</h2>
        <RegistrationState step={currentStep} maxStep={maxStep} />
      </div>

      <form data-test-id='register-form' onSubmit={handleSubmit(onSubmit)} id='form_reg' className='registration__form'>
        {formData
          .filter((input) => input.step === currentStep)
          .map((input) => {
            const InputElement = getInputByType(input.type);

            return (
              <InputElement
                hasMultipleHints={input.hasMultipleHints}
                keywords={input.keywords}
                register={register}
                validationSchema={input.validationSchema}
                error={errors[input.name]}
                hints={input.errorTips}
                defaultHint={input.defaultHint}
                inputName={input.name}
                placeholder={input.title}
                hasCheckIcon={input.hasCheckIcon}
                key={input.id}
              />
            );
          })}
      </form>

      <div className='registration__controls'>
        <button disabled={Object.keys(errors).length} className='registration__button' form='form_reg' type='submit'>
          {currentStep === maxStep
            ? 'Зарегистрироваться'
            : currentStep === maxStep - 1
            ? 'Последний шаг'
            : 'Следующий шаг'}
        </button>

        <div className='auth-question'>
          <span>Есть учетная запись?</span>
          <Link to='/auth' className='auth-question__link'>
            ВОЙТИ
            <img className='auth-question__arrow' src={authArrow} alt='arrow' />
          </Link>
        </div>
      </div>
    </div>
  );
};
