import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import './App.scss';
import Navigation from './infrastructure/navigation';
import Theme from './infrastructure/theme';

function App() {
	return (
		<Theme>
			<CssBaseline />
			<Navigation />
		</Theme>
	);
}

export default App;
