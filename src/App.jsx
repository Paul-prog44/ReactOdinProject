import { useState } from 'react'
import './App.css'
import Title from './components/Title'
import GeneralInformation from './components/GeneralInformation'
import EducationalExperience from './components/EducationalExperience.jsx'
import PracticalExperience from './components/PracticalExperience.jsx'

function App() {
  return (
    <>
    <Title/>
    <div className='page'>
      <div className='parts'>
        <GeneralInformation/>
        <EducationalExperience/>
        <PracticalExperience/>
      </div>
      <div className='parts'></div>
    </div>
    </>
  ) 
}

export default App
