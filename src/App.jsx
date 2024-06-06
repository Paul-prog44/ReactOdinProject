import { useState } from 'react'
import './App.css'
import Title from './components/Title'
import GeneralInformation from './components/GeneralInformation'
import EducationalExperience from './components/EducationalExperience.jsx'
import PracticalExperience from './components/PracticalExperience.jsx'
import GeneralInformationDisplay from './components/GeneralInformationDisplay.jsx'
import EducationalExperienceDisplay from './components/EducationalExperienceDisplay.jsx'
import PracticalExperienceDisplay from './components/PracticalExperienceDisplay.jsx'

function App() {
  //Tableau de stockage des formations
  const [formations, setFormations] = useState([]);

  //Ajouter un nouvel objet formation
  const addFormation = () => {
    setFormations([...formations, education])
  }


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
        <button onClick={addFormation}>Ajouter une formation</button>
        <PracticalExperience workExperience={workExperience} handleChange={handleChangeExperience}/>
      </div>
      <div className='parts'>
        <GeneralInformationDisplay generalInformation={generalInformation}/>
        <h3>Education et formation</h3>
        <EducationalExperienceDisplay formations={formations}/>
        <h3>Expériences professionnelles</h3>
        <PracticalExperienceDisplay workExperience={workExperience}/>
      </div>
    </div>
    </>
  ) 
}

export default App
