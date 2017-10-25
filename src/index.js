import 'bootstrap/dist/css/bootstrap.css'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { appState } from './appState'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App appState={appState} />, document.getElementById('root'));
registerServiceWorker();
