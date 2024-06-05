import { useState } from 'react'
import './App.css'
import Title from './components/Title'
import GeneralInformation from './components/GeneralInformation'
import EducationalExperience from './components/EducationalExperience'

function App() {
  return (
    <>
    <Title/>
    <div className='page'>
      <div className='parts'>
        <GeneralInformation/>
        <EducationalExperience/>
      </div>
      <div className='parts'></div>
    </div>
    </>
  ) 
}

export default App
