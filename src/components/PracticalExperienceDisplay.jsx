function PracticalExperienceDisplay({workExperiences}) {
    return (
        <>
            <ul>
                {workExperiences.map(item => (
                    <>
                        <li>{item.positionTitle}</li>
                        <p>{item.company}</p>
                        <p>{item.startYear + " - " + item.endYear}</p>
                        <p>{item.tasks}</p>
                    </>
                ))}
           </ul>

        </>
    )
}

export default PracticalExperienceDisplay