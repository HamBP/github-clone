import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/Logo.css';
import './styles/Board.css';
import './styles/Main.css';
import Logo from './components/common/logo/Logo';
import Board from './components/index/Board';
import Main from './components/index/Main';
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
