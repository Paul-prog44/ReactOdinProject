function PracticalExperienceDisplay({workExperiences}) {
    return (
        <ul>
            {workExperiences.map(item => (
                <li key={item.id}>{item.positionTitle}
                    <p>{item.company}</p>
                    <p>{item.startYear + " - " + item.endYear}</p>
                    <p>{item.tasks}</p>
                </li>
            ))}
        </ul>

    )
}

export default PracticalExperienceDisplay