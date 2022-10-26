import Button from '@mui/material/Button';
import * as _ from 'radash';
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

const initialForm = {
	username: 'test-user',
	password: '123Abc456',
	avatar: null,
	fullName: 'Shahan Ahmed Khan',
	email: 'shahan.khaan@gmail.com',
	cell: '+923362122588',
	gender: 'MALE'
};

function SignUpComponent() {
	const dispatch = useDispatch();

	const [loading, setLoading] = useState(false);
	const [genderOptions, setGenderOptions] = useState([]);
	const [form, setForm] = useState({ ...initialForm });

	const handleChange = (name) => {
		return ({ target: { value } }) => {
			setForm((prev) => ({
				...prev,
				[name]: value
			}));
		};
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);

		const payload = _.shake(form, (v) => !v);

		authService
			.signup(payload)
			.then((res) => {
				if (!res.success) return toast.error(res.message);

				dispatch(authActions.onAuth(res.data.payload));
			})
			.finally(() => setLoading(false));
	};

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
			<UploadComponent setter={(value) => setForm((prev) => ({ ...prev, avatar: value }))} />
			<Spacer position='marginBottom' />

			<form onSubmit={handleSubmit}>
				<CTextField
					disabled={loading}
					type='text'
					handleChange={handleChange('username')}
					label='User'
					value={form.username}
				/>
				<Spacer position='marginBottom' />

				<CTextField
					disabled={loading}
					type='password'
					handleChange={handleChange('password')}
					label='Password'
					value={form.password}
				/>
				<Spacer position='marginBottom' />

				<CTextField
					disabled={loading}
					handleChange={handleChange('fullName')}
					label='Full Name'
					value={form.fullName}
				/>
				<Spacer position='marginBottom' />

				<CTextField
					disabled={loading}
					type='email'
					handleChange={handleChange('email')}
					label='Email Address'
					value={form.email}
				/>
				<Spacer position='marginBottom' />

				<CTextField
					disabled={loading}
					type='tel'
					handleChange={handleChange('cell')}
					label='Phone number'
					value={form.cell}
				/>
				<Spacer position='marginBottom' />

				<CSelect
					handleChange={handleChange('gender')}
					label="Gender Options"
					options={genderOptions}
					value={form.gender}
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
