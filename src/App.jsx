import { useState } from 'react'
import './App.css'
import Title from './components/Title'
import GeneralInformation from './components/GeneralInformation'
import EducationalExperience from './components/EducationalExperience.jsx'
import PracticalExperience from './components/PracticalExperience.jsx'
import GeneralInformationDisplay from './components/GeneralInformationDisplay.jsx'
import EducationalExperienceDisplay from './components/EducationalExperienceDisplay.jsx'

function App() {
  //General information
  const [generalInformation, setGeneralInformation] = useState({
    name:"",
    lastname:"",
    job:"",
    phone:"",
    address:"",
    emailAddress:""
})

  //Expérience professionnelle
  const [workExperience, setWorkExperience] = useState({
    positionTitle:"",
    company:"",
    tasks:"",
    startYear:"",
    endYear:""
})

  //Education
  const [education, setEducation] = useState({
    titleOfStudy:"",
    schoolName:"",
    year:""
})

  //fonction de gestion de changement
  const handleChange = (field, value) => {
    setEducation(prevState => ({
        ...prevState,
        [field]:value
    }))
  }

  const handleGeneralInformation = (field, value) => {
    setGeneralInformation(prevState => ({
      ...prevState,
      [field]:value
    }))
  }

  const handleChangeExperience = (field, value) => {
    setWorkExperience(prevState => ({
        ...prevState,
        [field]:value
    }))
  }

  return (
    <>
    <Title/>
    <div className='page'>
      <div className='parts'>
        <GeneralInformation generalInformation={generalInformation} handleChange={handleGeneralInformation}/>
        <EducationalExperience education={education} handleChange={handleChange}/>
        <PracticalExperience workExperience={workExperience} handleChange={handleChangeExperience}/>
      </div>
      <div className='parts'>
        <GeneralInformationDisplay generalInformation={generalInformation}/>
        <EducationalExperienceDisplay education={education}/>
      </div>
    </div>
    </>
  ) 
}

export default App
