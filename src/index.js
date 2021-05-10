import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/Header.css';
import './styles/Board.css';
import './styles/Main.css';
import './styles/Footer.css';
import './styles/Aside.css';
import './styles/DropDown.css';
import Header from './components/common/header/Header';
import Board from './components/index/Board';
import Main from './components/index/Main';
import reportWebVitals from './reportWebVitals';
import Aside from "./components/index/Aside";
import Footer from "./components/index/Footer";
import DropDown from "./components/common/header/DropDown";

function Index() {
  return (
    <div>
      <Header/>
      <DropDown/>
      <div className='content'>
        <Board/>
        <Main/>
        <Aside/>
        <Footer/>
      </div>
    </div>
  );
}

ReactDOM.render(
  <Index/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
