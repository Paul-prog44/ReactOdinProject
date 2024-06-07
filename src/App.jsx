import { useState } from 'react'
import './App.css'
import Title from './components/Title'
import GeneralInformation from './components/GeneralInformation'
import EducationalExperience from './components/EducationalExperience.jsx'
import PracticalExperience from './components/PracticalExperience.jsx'
import GeneralInformationDisplay from './components/GeneralInformationDisplay.jsx'
import EducationalExperienceDisplay from './components/EducationalExperienceDisplay.jsx'
import PracticalExperienceDisplay from './components/PracticalExperienceDisplay.jsx'
import { v4 as uuidv4 } from 'uuid';


function App() {
  //Tableau de stockage des formations
  const [formations, setFormations] = useState([]);

  //Ajouter un nouvel objet formation
  const addFormation = () => {
    setFormations([...formations, education])
    resetEducation()
  }

  //Tableau de stockage des expériences pro
  const [workExperiences, setWorkExperiences] = useState([])

  //Ajouter un nouvel obejt workExperience
  const addWorkExperience = () => {
    setWorkExperiences([...workExperiences, workExperience])
    resetWorkExperience()
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
    endYear:"",
    id:uuidv4()
})

  //Education
  const [education, setEducation] = useState({
    titleOfStudy:"",
    schoolName:"",
    year:"",
    id:uuidv4()
})

  const resetEducation = () => {
    setEducation({
      titleOfStudy: '',
      schoolName: '',
      year: ''
    });
  };

  const resetWorkExperience = () => {
    setWorkExperience({
      positionTitle:"",
      company:"",
      tasks:"",
      startYear:"",
      endYear:""
    })
  }

  //fonction de gestion de changement
  const handleChange = (field, value) => {
    setEducation(prevState => ({
        ...prevState,
        [field]:value,
        id:uuidv4()
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
        [field]:value,
        id:uuidv4()
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
        <button onClick={addWorkExperience}>Ajouter une expérience professionnelle</button>
      </div>
      <div className='parts'>
        <GeneralInformationDisplay generalInformation={generalInformation}/>
        <h2>Education et formation</h2>
        <EducationalExperienceDisplay formations={formations} setFormations={setFormations}/>
        <h2>Expériences professionnelles</h2>
        <PracticalExperienceDisplay workExperiences={workExperiences} setWorkExperiences={setWorkExperiences}/>
      </div>
    </div>
    </>
  ) 
}

export default App
