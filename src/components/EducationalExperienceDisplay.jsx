function EducationalExperienceDisplay({formations}) {
    return (
        <>
            <ul>
                {formations.map(item => (
                        <li key={item.id}>
                            {item.titleOfStudy}
                            <p>{item.schoolName + " - " + item.year} </p>
                        </li>
                ))}
            </ul>
        </>
    )
}

export default EducationalExperienceDisplay