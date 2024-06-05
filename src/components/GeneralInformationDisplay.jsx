function GeneralInformationDisplay({generalInformation}) {

    return (
        <>
            <h2>{generalInformation.name ? generalInformation.name : "Votre nom"}{" " + generalInformation.lastname}</h2>
            <p>{generalInformation.job ? generalInformation.job : "Poste souhaité"}</p>
            <div>
                <h3>Informations professionnelles</h3>
                <p>{generalInformation.phone ? "Téléphone :" + generalInformation.phone : "" }</p>
            </div>
        </>
    )
}

export default GeneralInformationDisplay