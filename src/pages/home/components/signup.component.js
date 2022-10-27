import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import CSelect from '../../../components/form/select/select.component';
import CTextField from '../../../components/form/textfield/textfield.component';
import UploadComponent from '../../../components/form/upload/upload.component';
import Spacer from '../../../components/spacer/spacer.component';
import { authService, commonService } from '../../../services';
import { authActions } from '../../../store/auth';
import { excludeNullsAndOmit } from '../../../utils/helper.util';
import { signupInitialValues, signupValidationSchema } from './model/signup.model';

function SignUpComponent() {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [genderOptions, setGenderOptions] = useState([]);

  const handleSubmit = (values) => {
    const payload = excludeNullsAndOmit(values, 'confirmPassword');

    setLoading(true);
    authService
      .signup(payload)
      .then((res) => {
        if (!res.success) return toast.error(res.message);

        dispatch(authActions.onAuth(res.data.payload));
      })
      .finally(() => setLoading(false));
  };

  const formik = useFormik({
    initialValues: signupInitialValues,
    validationSchema: signupValidationSchema,
    onSubmit: handleSubmit,
  });

  useEffect(() => {
    commonService.getGenderOptions().then((res) => {
      if (!res.success) {
        toast.error(res.message);
        return;
      }

      setGenderOptions(res.data);
    });
  }, []);

  return (
    <Fragment>
      <UploadComponent setter={(value) => formik.setFieldValue('avatar', value)} />
      <Spacer position='marginBottom' />

      <form onSubmit={formik.handleSubmit}>
        <CTextField
          error={
            formik.touched.username && formik.errors.username ? formik.errors.username : undefined
          }
          disabled={loading}
          type='text'
          handleChange={formik.handleChange('username')}
          label='Username'
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

        <CTextField
          error={
            formik.touched.confirmPassword && formik.errors.confirmPassword
              ? formik.errors.confirmPassword
              : undefined
          }
          disabled={loading}
          type='password'
          handleChange={formik.handleChange('confirmPassword')}
          label='Confirm Password'
          value={formik.values.confirmPassword}
        />
        <Spacer position='marginBottom' />

        <CTextField
          error={
            formik.touched.fullName && formik.errors.fullName ? formik.errors.username : undefined
          }
          disabled={loading}
          handleChange={formik.handleChange('fullName')}
          label='Full Name'
          value={formik.values.fullName}
        />
        <Spacer position='marginBottom' />

        <CTextField
          error={formik.touched.email && formik.errors.email ? formik.errors.email : undefined}
          disabled={loading}
          handleChange={formik.handleChange('email')}
          label='Email Address'
          value={formik.values.email}
        />
        <Spacer position='marginBottom' />

        <CTextField
          error={formik.touched.cell && formik.errors.cell ? formik.errors.cell : undefined}
          disabled={loading}
          type='tel'
          handleChange={formik.handleChange('cell')}
          label='Phone number'
          value={formik.values.cell}
        />
        <Spacer position='marginBottom' />

        <CSelect
          error={formik.touched.gender && formik.errors.gender ? formik.errors.gender : undefined}
          handleChange={formik.handleChange('gender')}
          label='Gender Options'
          options={genderOptions}
          value={formik.values.gender}
        />
        <Spacer position='marginBottom' />

        <Button disabled={loading} type='submit' variant='contained'>
          Sign Up
        </Button>
      </form>
      <p>
        Already have an account?
        <Button to='/' disabled={loading} LinkComponent={Link} variant='text' color='secondary'>
          Sign In
        </Button>
      </p>
    </Fragment>
  );
}

export default SignUpComponent;
