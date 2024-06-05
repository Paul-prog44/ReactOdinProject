import { useState } from "react";
import Input from "./Input";

function PracticalExperience() {
    const [workExperience, setWorkExperience] = useState({
        positionTitle:"",
        company:"",
        tasks:"",
        startYear:"",
        endYear:""
    })

    //fonction de gestion de changement
    const handleChange = (field, value) => {
        setWorkExperience(prevState => ({
            ...prevState,
            [field]:value
        }))
    }

    return (
        <>
            <h2>Expérience professionnelle</h2>
            <Input name="positionTitle" label="Poste" type="text" value={workExperience.positionTitle} onInputChange={handleChange}/>
            <Input name="company" label="Entreprise" type="text" value={workExperience.company} onInputChange={handleChange}/>
            <Input name="tasks" label="Taches principales" type="text" value={workExperience.tasks} onInputChange={handleChange}/>
            <Input name="startYear" label="Date de début" type="number" value={workExperience.startYear} onInputChange={handleChange}/>
            <Input name="endYear" label="Date de fin" type="number" value={workExperience.endYear} onInputChange={handleChange}/>
        </>
    )
}

export default PracticalExperience