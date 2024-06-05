import Input from "./Input";

function PracticalExperience() {
    return (
        <>
            <h2>Expérience professionnelle</h2>
            <Input name="positionTitle" label="Poste"/>
            <Input name="company" label="Entreprise"/>
            <Input name="tasks" label="Taches principales"/>
            <Input name="startYear" label="Date de début"/>
            <Input name="endYear" label="Date de fin"/>
        </>
    )
}

export default PracticalExperience