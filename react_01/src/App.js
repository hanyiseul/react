// import logo from './logo.svg';
// import './App.css';
import Device from './Device';

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

//import React, { Fragment } from 'react'; // Fragment 를 적용한 컴포넌트
 
/* 컴포넌트 생성
function 컴포넌트명(){ // 컴포넌트명 대문자로 작성
  return(
    반환할 jsx //html과 javascript 조합한 문법
  );
}
*/
// function App() { // 컴포넌트
//     return ( // return 괄호 없어도 됨
//       /*<Fragment>
//         hello
//         <Device/>
//       </Fragment> //감쌀 태그가 필요 없으면 Fragment 태그 사용 */
//       <div className="everdevel">
//         hello<br></br>
//         {/*jsx에서는 단독 태그 허용x*/}
//         <input name="input"></input>
//         <Device/>
//       </div>
//     );
// }
 
// export default App; // 다른 파일에서 이 컴포넌트를 import 할 수 있게 해줌

//props
//props명="값"
function App(){
  return(
    <div>
      hello
      <Device mydevice="iPad Pro"/>
      <Device mydevice="iPad Pro2"/>
      <Device mydevice="iPad Pro3"/>
      <Device mydevice="iPad Pro4"/>
      <Device mydevice="iPad Pro5"/>
    </div>
  );
}

export default App;