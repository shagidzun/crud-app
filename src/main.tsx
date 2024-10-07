import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { text } from './constants.ts';

if (!localStorage.getItem('articles')) {
	localStorage.setItem('articles', JSON.stringify([text]));
}

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App />
	</StrictMode>
);
