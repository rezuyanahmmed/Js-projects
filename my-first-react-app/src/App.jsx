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
      <Developer></Developer>
    </>
  )
}

function Developer() {
  return (
    <div style={{
      border:'2px solid red',
      borderRadius:'20px'
    }}>
      <p>name:</p>
      <p>technology:</p>
    </div>
  )
}

function Pet() {
  return (
    <p>cat</p>
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