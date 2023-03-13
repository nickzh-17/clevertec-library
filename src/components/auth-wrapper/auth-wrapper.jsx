import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { LottieLoader } from '../lottie-loader';
import './auth-wrapper.scss';

export const AuthWrapper = ({ children }) => {
  const dispatch = useDispatch();

  axios.interceptors.request.use(
    (request) => {
      dispatch({ type: 'START_FETCHING' });
      return request;
    },
    (error) => {
      dispatch({ type: 'END_FETCHING' });
      return Promise.reject(error);
    }
  );
  axios.interceptors.response.use(
    (response) => {
      dispatch({ type: 'END_FETCHING' });
      return response;
    },
    (error) => {
      dispatch({ type: 'END_FETCHING' });
      return Promise.reject(error);
    }
  );

  return (
    <div className='auth-wrapper' data-test-id='auth'>
      <div className='auth-wrapper__content'>
        <h1 className='auth-wrapper__title'>Cleverland</h1>

        <div className='auth-wrapper__frame'>
          <Outlet />
        </div>
      </div>
      <LottieLoader />
    </div>
  );
};
