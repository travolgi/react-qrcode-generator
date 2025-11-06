import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Attribution from './components/Attribution';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
		<Attribution />
	</React.StrictMode>
);

// Learn more: https://bit.ly/CRA-vitals
reportWebVitals();