
function PracticalExperienceDisplay({workExperience}) {
    return (
        <>
           <h3>Expériences professionnelles</h3>
           <p>{workExperience.positionTitle}</p>
           <p>{workExperience.company}</p>
           <p>{workExperience.tasks}</p>
           <p>{workExperience.startYear + "-" + workExperience.endYear}</p>

        </>
    )
}

export default PracticalExperienceDisplay