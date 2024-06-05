import Input from "./Input"

function EducationalExperience() {
    return (
        <>
            <h2>Education et formation</h2>
            <Input label="Formation" name="titleOfStudy"/>
            <Input label="Etablissement" name="SchoolName"/>
            <Input label="Année" name="dateOfStudy"/>
        </>
    )
}

export default EducationalExperience

