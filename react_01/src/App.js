// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react'; // 리액트의 여러기능을 사용할 수 있게 해줌
 
/* 컴포넌트 생성
function 컴포넌트명(){ // 컴포넌트명 대문자로 작성
  return(
    반환할 jsx //html과 javascript 조합한 문법
  );
}
*/
function App() { // 컴포넌트
    return ( // return 괄호 없어도 됨
      <div>hello</div>     
    );
}
 
export default App; // 다른 파일에서 이 컴포넌트를 import 할 수 있게 해줌
