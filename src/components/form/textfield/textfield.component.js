import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

function CTextField({ disabled, error, label, value, handleChange, variant, type }) {
	const [showPassword, setShowPassword] = useState(false);

	const handleClickShowPassword = () => setShowPassword((prev) => !prev);
	return (
		<TextField
			fullWidth
			disabled={disabled}
			type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
			error={!!error}
			label={label}
			value={value}
			helperText={error}
			variant={variant}
			onChange={handleChange}
			InputProps={
				type !== 'password'
					? null
					: {
							endAdornment: (
								<InputAdornment position='end'>
									<IconButton
										aria-label='toggle password visibility'
										onClick={handleClickShowPassword}
										edge='end'
									>
										{showPassword ? <VisibilityOff /> : <Visibility />}
									</IconButton>
								</InputAdornment>
							)
					  }
			}
		/>
	);
}

CTextField.propTypes = {
	disabled: PropTypes.bool.isRequired,
	error: PropTypes.string,
	label: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired,
	variant: PropTypes.oneOf(['filled', 'outlined', 'standard']).isRequired,
	type: PropTypes.string.isRequired
};

CTextField.defaultProps = {
	disabled: false,
	variant: 'standard',
	type: 'text'
};

export default CTextField;
