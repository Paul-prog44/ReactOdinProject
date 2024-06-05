import Input from "./Input"

function EducationalExperience({education, handleChange}) {
    
    return (
        <>
            <h2>Education et formation</h2>
            <Input label="Formation" name="titleOfStudy" type="text" value={education.titleOfStudy} onInputChange={handleChange}/>
            <Input label="Etablissement" name="schoolName" type="text" value={education.schoolName} onInputChange={handleChange}/>
            <Input label="Année" name="year" type="number" value={education.year} onInputChange={handleChange}/>
        </>
    )
}

export default EducationalExperience

