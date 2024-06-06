function EducationalExperienceDisplay({formations}) {
    return (
        <>
            <ul>
                {formations.map(item => (
                    <>
                        <li>{item.titleOfStudy}</li>
                        <p>{item.schoolName + " - " + item.year} </p>
                    </>
                ))}
            </ul>
        </>
    )
}

export default EducationalExperienceDisplay