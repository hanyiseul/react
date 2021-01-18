import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App'; // App 컴포넌트를 import
// import reportWebVitals from './reportWebVitals';
import Device from './Device';

// ReactDOM.render( // 화면에 출력할 때 사용
//   <React.StrictMode>
//     <App /> 
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

//ReactDOM.render(<App />,document.getElementById('root')); // 첫번째 인자인 <App/>는 App 컴포넌트가 반환한 내용을 뜻함 두번째 document~ 는 App컴포넌트가 반환한 내용이 들어갈 태그

ReactDOM.render(<Device />,document.getElementById('root'));
