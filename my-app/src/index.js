import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Toggle from './toggle'
import * as serviceWorker from './serviceWorker';
import LoginControl from './LoginController'
import ListTest from './ListTest'
// ReactDOM.render(
//     <LoginControl />,
//     document.getElementById('root')
//   );
ReactDOM.render(<ListTest />,document.getElementById('root'))
//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
