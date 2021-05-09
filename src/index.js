import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Logo.css';
import './Board.css';
import './Main.css';
import App from './App';
import Logo from './Logo';
import Board from './Board';
import Main from './Main';
import reportWebVitals from './reportWebVitals';

function Index() {
  return (
      <div>
        <Logo />
        <div className='content'>
          <Board />
          <Main />
        </div>
      </div>
    );
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
