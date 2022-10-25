import Button from '@mui/material/Button';
import React, { useState } from 'react';
import CTextField from '../../components/form/textfield.component';
import { authService } from '../../services';

const initialForm = { username: 'kminchelle', password: '0lelplR' };
function LoginPage() {
	const [loading, setLoading] = useState(false);
	const [form, setForm] = useState({ ...initialForm });
	const handleChange =
		(name) =>
		({ target: { value } }) => {
			setForm((prev) => ({
				...prev,
				[name]: value
			}));
		};
	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		authService
			.login({ ...form })
			.then((res) => {
				if (!res.success) {
					console.log('login catch...', JSON.stringify(res.data, null, 3));
					alert(res.data);
					return;
				}
			})
			.finally(() => setLoading(false));
	};
	return (
		<form onSubmit={handleSubmit}>
			<CTextField
				disabled={loading}
				type='text'
				handleChange={handleChange('username')}
				label='User'
				value={form.username}
			/>
			<CTextField
				disabled={loading}
				type='password'
				handleChange={handleChange('password')}
				label='Password'
				value={form.password}
			/>
			<Button disabled={loading} type='submit' variant='contained'>
				Submit
			</Button>
		</form>
	);
}

export default LoginPage;
