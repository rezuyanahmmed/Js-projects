// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { defaultClientConditions } from 'vite'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <Pet></Pet>
//       <Student></Student>
//       <Developer></Developer>
//       {/* <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p> */}
//     </>


//   )
// }

// function Developer() {
//   return (
//     <div>
//       <p>name:</p>
//       <p>technology:</p>
//     </div>
//   )
// }

// function Pet() {
//   return (
//     <p>cat</p>

//   )
// }

// function Student() {
//   return (
//     <div className='student'>
//       <p>Name:</p>
//       <p>Dept:</p>
//     </div>
//   )
// }

// export default App


import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import ToDo from './Todo';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Pet></Pet>
      <Student></Student>
      <Developer name="Rizuyan" tech="Js"></Developer>
      <Developer name="Rafi" tech="Python"></Developer>
      <Doctor name="Ali Hasan" center="Dhaka"></Doctor>
      <Doctor name="Ahmmed Ullah" center="Cumilla"></Doctor>
      <Salami event="Eid ul fitor" ammount="50tk"></Salami>
      <ToDo task="learn React" isDone={true}></ToDo>
      <ToDo task="Revise React" isDone={false}></ToDo>
      <ToDo task="take it" isDone={true}></ToDo>
    </>
  )
}

// distructure er use kore.....
function Salami({ event, ammount}) {
  return (
    <div>
      <p>salami for: {event} </p>
      <p>ammount: {ammount}</p>
    </div>
  )
}

function Developer(props) {
  console.log(props);
  // amra ekhane developer er jonno function likhechi setate style diyechi...
  // --3 vabe ekhnae style dewa jay...
  // amara ekhane props name ekta pearmeter name dichi tarpor main function e name er pore seceond bracket dite ei perameter er name dot oi property er name ta dibo jeta amara function App er vitor use korechi UI te dekhanr jonno...
  return (
    <div style={{
      border: '2px solid red',
      borderRadius: '20px'
    }}>
      <p>name: {props.name}</p>
      <p>technology: {props.tech}</p>
    </div>
  )
}

function Pet() {
  return (
    <p>cat</p>
  )
}

function Doctor(pro) {
  return (
    <div>
      <h3>Name: {pro.name}</h3>
      <p>Center: {pro.center} </p>
    </div>
  )
}

function Student() {
  return (
    <div className='student'>
      <p>Name:</p>
      <p>Dept:</p>
    </div>
  )
}

export default App