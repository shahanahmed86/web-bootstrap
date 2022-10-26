import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import palette from './palette.theme';
import typography from './typography.theme';

const theme = createTheme({
	palette,
	typography,
	spacing: 4
});

function Theme({ children }) {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default Theme;
