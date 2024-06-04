import { useState } from 'react'
import './App.css'
import Title from './components/title'
import GeneralInformation from './components/generalInformation'

function App() {
  return (
    <>
    <Title/>
    <div className='page'>
      <div className='parts'>
        <GeneralInformation/>
      </div>
      <div className='parts'></div>
    </div>
    </>
  ) 
}

export default App
