import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Weather from './components/Weather'
import axios from 'axios'
import Author from './components/Author'

function App() {
  
  return (
    <>
      <div className="App">
        <Weather/>
      </div>
      <div className='foot'>
        <Author/>
      </div>
    </>
  )
}

export default App
