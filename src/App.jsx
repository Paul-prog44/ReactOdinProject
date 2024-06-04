import { useState } from 'react'
import './App.css'
import Title from './components/title'

function App() {
  return (
    <>
    <Title/>
    <div className='page'>
      <div className='parts'></div>
      <div className='parts'></div>
    </div>
    </>
  ) 
}

export default App
