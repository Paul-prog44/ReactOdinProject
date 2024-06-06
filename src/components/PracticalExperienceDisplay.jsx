
function PracticalExperienceDisplay({workExperience}) {
    return (
        <>
           <p>{workExperience.positionTitle}</p>
           <p>{workExperience.company}</p>
           <p>{workExperience.tasks}</p>
           <p>{workExperience.startYear ? workExperience.startYear + "-" + workExperience.endYear : ""}</p>

        </>
    )
}

export default PracticalExperienceDisplay