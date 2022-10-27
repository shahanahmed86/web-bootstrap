import Button from '@mui/material/Button';
import React, { useState, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import CTextField from '../../../components/form/textfield/textfield.component';
import { authService } from '../../../services';
import { authActions } from '../../../store/auth';
import { toast } from 'react-toastify';
import Spacer from '../../../components/spacer/spacer.component';
import { useFormik } from 'formik';
import { loginInitialValues, loginValidationSchema } from './model/login.model';

function LoginComponent() {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const handleSubmit = (values) => {
    setLoading(true);
    authService
      .login(values)
      .then((res) => {
        if (!res.success) return toast.error(res.message);

        dispatch(authActions.onAuth(res.data.payload));
      })
      .finally(() => setLoading(false));
  };

  const formik = useFormik({
    initialValues: loginInitialValues,
    validationSchema: loginValidationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <Fragment>
      <form onSubmit={formik.handleSubmit}>
        <CTextField
          error={
            formik.touched.username && formik.errors.username ? formik.errors.username : undefined
          }
          disabled={loading}
          type='text'
          handleChange={formik.handleChange('username')}
          label='User'
          value={formik.values.username}
        />
        <Spacer position='marginBottom' />

        <CTextField
          error={
            formik.touched.password && formik.errors.password ? formik.errors.password : undefined
          }
          disabled={loading}
          type='password'
          handleChange={formik.handleChange('password')}
          label='Password'
          value={formik.values.password}
        />
        <Spacer position='marginBottom' />
        <Button disabled={loading} type='submit' variant='contained'>
          Sign In
        </Button>
      </form>
      <p>
        Don't have an account?
        <Button
          to='/signup'
          disabled={loading}
          LinkComponent={Link}
          variant='text'
          color='secondary'
        >
          Sign Up
        </Button>
      </p>
    </Fragment>
  );
}

export default LoginComponent;
