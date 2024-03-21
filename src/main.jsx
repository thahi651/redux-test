import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux';
import Todostore from './components/todoStore.js';



ReactDOM.createRoot(document.getElementById('root')).render(


	<React.StrictMode>
		<Provider store={Todostore} ><App /></Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

