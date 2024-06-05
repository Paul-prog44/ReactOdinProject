function EducationalExperienceDisplay({education}) {
    return (
        <>
            <h3>Education</h3>
            <p>{education.titleOfStudy}</p>
            <p>{education.schoolName + " " + education.year}</p>
        </>
    )
}

export default EducationalExperienceDisplay