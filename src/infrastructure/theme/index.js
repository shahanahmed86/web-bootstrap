import { createTheme, ThemeProvider } from '@mui/material/styles';
import PropTypes from 'prop-types';
import React from 'react';
import palette from './palette.theme';
import typography from './typography.theme';

const theme = createTheme({
  palette,
  typography,
  spacing: 4,
});

function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

Theme.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Theme;
