function EducationalExperienceDisplay({formations, setFormations}) {
    const removeItem = (id) =>{
        setFormations(formations.filter(item => item.id !== id))
    }

    return (
        <>
            <ul>
                {formations.map(item => (
                        <li key={item.id}>
                            {item.titleOfStudy}
                            <p>{item.schoolName + " - " + item.year} </p>
                            <button onClick={() => removeItem(item.id)}>Supprimer</button>
                        </li>
                ))}
            </ul>
        </>
    )
}

export default EducationalExperienceDisplay