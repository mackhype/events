import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import 'bootstrap/dist/css/bootstrap. css';
import './App.css'

function App() {
  return (
    <>
    <div id='container'>
    <div id='first'>
      <h1 className='text-blue' id='h1'>Facebook</h1>
      <h2>Facebook helps you connect and share with the people in your life</h2>
    </div>
    <div>
      <form id='former' method='get' action=''>
        <input id='input1' type='email' name='email' placeholder='Email address or phone number'></input><br />
        <input id='input2' type='password' name='password' placeholder='Password'></input><br />
        <button id="log">Log in</button><br />
        <a id='a1'>Forgotten password?</a><br />
        <button id="cre" type='submit'>Create new account</button>
      </form>
      <div id='last'>
        <a href='lastA'>Create a page <span>for a celebrity, brand or business</span></a>
      </div>
    </div>
    </div>
    </>
  )
}

export default App
