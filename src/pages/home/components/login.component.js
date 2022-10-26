import Button from '@mui/material/Button';
import React, { useState, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import CTextField from '../../../components/form/textfield/textfield.component';
import { authService } from '../../../services';
import { authActions } from '../../../store/auth';
import { toast } from 'react-toastify';
import Spacer from '../../../components/spacer/spacer.component';

const initialForm = { username: 'shahanahmed', password: '123Abc456' };
function LoginComponent() {
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(false);
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
		authService
			.login({ ...form })
			.then((res) => {
				if (!res.success) return toast.error(res.message);

				dispatch(authActions.onAuth(res.data.payload));
			})
			.finally(() => setLoading(false));
	};
	return (
		<Fragment>
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
