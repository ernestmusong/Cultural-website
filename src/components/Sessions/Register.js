/* eslint react/jsx-props-no-spreading: 0 */
import React, { useState } from 'react';
import { useFormik } from 'formik';
import { NavLink, useNavigate } from 'react-router-dom';
import Title4 from 'components/Headings/Title4';
import * as Yup from 'yup';

const Register = () => {
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState('');
  const formik = useFormik({
    initialValues: {
      title: '',
      firstName: '',
      lastName: '',
      username: '',
      branch: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Title must not be empty'),
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('First Name must not be empty'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Last Name must not be empty'),
      username: Yup.string()
        .max(15, 'Must be 15 characters or less').required('Username must not be empty'),
      email: Yup.string().email('Invalid email address').required('Email must not be empty'),
      branch: Yup.string().required('Branch must not be empty'),
      password: Yup.string().required('Password must not be empty'),
    }),
    onSubmit: (values) => {
      localStorage.setItem('user', JSON.stringify(values));
      setSuccess(true);
      setMessage('Registered Successfully!');
      navigate('/my-contributions');
    },
  });

  return (
    <>
      <Title4 title="Register" />
      <div className="signup-component">
        <form
          className="register-form"
          onSubmit={formik.handleSubmit}
        >
          <div>
            <div className="form-row mx-auto">
              <div className="form-group col-lg-3">
                <label style={{ color: 'Var(--softWhite)' }} htmlFor="title" className="form-label">
                  Title
                  <select
                    className="form-control"
                    name="title"
                    id="title"
                    {...formik.getFieldProps('title')}
                  >
                    <option className="text-muted" value="" disabled selected hidden>Mr/Mrs/Miss</option>
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Miss">Miss</option>

                  </select>
                </label>
                {formik.touched.title && formik.errors.title ? (
                  <div className="for-error">
                    <span className="error-message" aria-live="polite">
                      {formik.errors.title}
                    </span>

                  </div>
                ) : null}
              </div>
              <div className="form-group col-lg-3">
                <label style={{ color: 'Var(--softWhite)' }} htmlFor="firstName">
                  First Name
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your first name"
                    id="firstName"
                    name="firstName"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </label>
                {formik.touched.firstName && formik.errors.firstName ? (
                  <div className="for-error">
                    <span className="error-message" aria-live="polite">
                      {formik.errors.firstName}
                    </span>

                  </div>
                ) : null}
              </div>

              <div className="form-group col-lg-3">
                <label style={{ color: 'Var(--softWhite)' }} htmlFor="lastName">
                  Last Name
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your last name"
                    id="lastName"
                    name="lastName"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </label>
                {formik.touched.lastName && formik.errors.lastName ? (
                  <div className="for-error">
                    <span className="error-message" aria-live="polite">
                      {formik.errors.lastName}
                    </span>

                  </div>
                ) : null}
              </div>
            </div>

            <div className="form-row mx-auto">
              <div className="form-group col-lg-3">
                <label style={{ color: 'Var(--softWhite)' }} htmlFor="username">
                  Username
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your username"
                    id="username"
                    name="username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
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
              <div className="form-row mx-auto">
                <div className="form-group col-lg-3">
                  <label style={{ color: 'Var(--softWhite)' }} htmlFor="email">
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
              </div>
            </div>

            <div className="form-row mx-auto">
              <div className="form-group col-lg-3">
                <label style={{ color: 'Var(--softWhite)' }} htmlFor="branch">
                  Branch
                  <select
                    className="form-control"
                    name="branch"
                    id="branch"
                    value={formik.values.branch}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    <option value="" disabled selected hidden>Select your branch</option>
                    <option value="Yaounde">Yaounde</option>
                    <option value="Douala">Douala</option>
                    <option value="Bamenda">Bamenda</option>
                    <option value="Buea">Buea</option>
                    <option value="Limbe">Limbe</option>
                    <option value="Muea">Muea</option>
                    <option value="Mutengene">Mutengene</option>
                    <option value="Diaspora">Diaspora</option>

                  </select>
                </label>
                {formik.touched.branch && formik.errors.branch ? (
                  <div className="for-error">
                    <span className="error-message" aria-live="polite">
                      {formik.errors.branch}
                    </span>

                  </div>
                ) : null}
              </div>

            </div>

            <div className="form-row mx-auto">
              <div className="form-group col-lg-3 ">
                <label style={{ color: 'Var(--softWhite)' }} htmlFor="password">
                  Password
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter your password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
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
            </div>
            <div className="form-row mx-auto mt-4 mb-4">
              <div className="form-group col-lg-3">
                <button type="submit" className="btn w-100 btn-block">Register</button>
              </div>
            </div>
          </div>
          {message && (
          <div className="form-group">
            <div
              className={
                  success
                    ? 'alert alert-success bg-white text-success text-center'
                    : 'alert alert-danger text-center text-danger'
                }
              role="alert"
            >
              {success ? message : 'Something went wrong!'}
            </div>
          </div>
          )}
          <span className="session-span text-white">Already have an account?</span>
          {' '}
          <NavLink to="/login" className="session-link">Login</NavLink>
        </form>
      </div>
    </>
  );
};

export default Register;
