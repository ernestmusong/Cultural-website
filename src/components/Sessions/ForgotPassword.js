/* eslint react/jsx-props-no-spreading: 0 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Title4 from 'components/Headings/Title4';

const ForgotPassword = () => {
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email must not be empty'),
    }),
    onSubmit: (values) => {
      setLoading(true);
      const user = JSON.parse(localStorage.getItem('user'));
      if (user && user.email === values.email) {
        setLoading(false);
        setSuccess(true);
        setMessage('Email has been sent successfully!');
      } else if (!user) {
        setLoading(false);
        setMessage('Could not send email!');
      }
    },
  });

  return (
    <>
      <Title4 title="Forgot Password" />
      {success && <p className="text-white text-center">You will receive an email with instructions about how to reсover your password in a few minutes.</p>}
      <div className="col-md-12 login-component">
        <div className="card card-container">
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">
                Email
                <input
                  id="email"
                  type="email"
                  className="form-control"
                  placeholder="Your email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </label>
              {formik.touched.email && formik.errors.email ? (
                <div className="for-error">
                  <span className="error-message" aria-live="polite">
                    {formik.errors.email}
                  </span>

                </div>
              ) : null}
            </div>
            <div className="form-group">
              <button
                type="submit"
                className="btn btn-block w-100 mt-2"
                disabled={loading}
              >
                {loading && (
                <span className="spinner-border spinner-border-sm" />
                )}
                <span>{success ? 'Resend' : 'Send'}</span>
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
          </form>
        </div>
      </div>
      <div id="forgot">
        <Link to="/login">Go back</Link>
      </div>
    </>
  );
};

export default ForgotPassword;
