import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import PropTypes from 'prop-types';
import React from 'react';
import * as _ from 'radash';

const capitalize = (label) => _.capitalize(label).split('_').join(' ');

function ESelect({ value, options, label, error, handleChange }) {
	return (
		<FormControl error={!!error} fullWidth variant='standard'>
			<InputLabel>{label}</InputLabel>
			<Select fullWidth value={value} onChange={handleChange}>
				{options.map((label, i) => (
					<MenuItem key={`option-${label}-ind-${i}`} value={label}>
						{capitalize(label)}
					</MenuItem>
				))}
			</Select>
			<FormHelperText>{error}</FormHelperText>
		</FormControl>
	);
}

ESelect.propTypes = {
	value: PropTypes.string.isRequired,
	options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
	label: PropTypes.string.isRequired,
	error: PropTypes.string,
	handleChange: PropTypes.func.isRequired
};

export default ESelect;
