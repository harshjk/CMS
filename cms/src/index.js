import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const title = "CMS";

ReactDOM.render(<App title={title} author="Harsh Jagdishbhai Kevadia"/>, document.getElementById('root'));
registerServiceWorker();