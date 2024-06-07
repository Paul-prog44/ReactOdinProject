function PracticalExperienceDisplay({workExperiences, setWorkExperiences}) {
    const removeItem= (id) => {
        setWorkExperiences(workExperiences.filter(item => item.id !== id))
    }

    return (
        <ul>
            {workExperiences.map(item => (
                <li key={item.id}>{item.positionTitle}
                    <p>{item.company}</p>
                    <p>{item.startYear + " - " + item.endYear}</p>
                    <p>{item.tasks}</p>
                    <button onClick={() => removeItem(item.id)}>Supprimer</button>
                </li>
            ))}
        </ul>

    )
}

export default PracticalExperienceDisplay