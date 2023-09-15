/* eslint react/jsx-props-no-spreading: 0 */

import React, { useState } from 'react';
import { useFormik } from 'formik';
import { NavLink, useNavigate } from 'react-router-dom';
import Title4 from 'components/Headings/Title4';
import * as Yup from 'yup';

const Login = () => {
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      email: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .max(15, 'Must be 15 characters or less').required('Username must not be empty'),
      password: Yup.string().required('Password must not be empty'),
    }),
    onSubmit: (values) => {
      setLoading(true);
      const user = JSON.parse(localStorage.getItem('user'));
      if (user && user.username === values.username && user.password === values.password) {
        setLoading(false);
        setSuccess(true);
        setMessage('You have successfully signed in!');
        navigate('/dashboard');
      } else if (!user) {
        setLoading(false);
        setMessage('Invalid username/password');
      }
    },
  });

  return (
    <>
      <Title4 title="Login" />
      <div className="col-md-12 login-component">
        <div className="card card-container">
          <img
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="profile-img"
            className="profile-img-card"
          />

          <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">
                Username
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your username"
                  name="username"
                  id="username"
                  {...formik.getFieldProps('username')}
                />
              </label>
              {formik.touched.username && formik.errors.username ? (
                <div className="for-error">
                  <span className="error-message" aria-live="polite">
                    {formik.errors.username}
                  </span>

                </div>
              ) : null}
            </div>

            <div className="form-group">
              <label htmlFor="password">
                Password
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter your password"
                  name="password"
                  id="password"
                  {...formik.getFieldProps('password')}
                />
              </label>
              {formik.touched.password && formik.errors.password ? (
                <div className="for-error">
                  <span className="error-message" aria-live="polite">
                    {formik.errors.password}
                  </span>

                </div>
              ) : null}
            </div>
            <NavLink to="/forgot-password" className="session-link mt-1" id="forgot-password">Forgot your password?</NavLink>
            <div className="form-group">
              <button
                type="submit"
                className="btn btn-block w-100 mt-2"
                disabled={loading}
              >
                {loading && (
                <span className="spinner-border spinner-border-sm" />
                )}
                <span>Login</span>
              </button>
            </div>

            {message && (
            <div className="form-group">
              <div
                className={
                  success
                    ? 'alert alert-success bg-white text-success text-center'
                    : 'alert alert-danger text-center text-danger bg-white'
                }
                role="alert"
              >
                {message}
              </div>
            </div>
            )}
            <span className="session-span">Don&apos;t have an account yet?</span>
            {' '}
            <NavLink to="/register" className="session-link">Register now</NavLink>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
