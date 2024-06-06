function GeneralInformationDisplay({generalInformation}) {

    return (
        <>
            <h2>{generalInformation.name ? generalInformation.name : "Votre nom"}{" " + generalInformation.lastname}</h2>
            <h4>{generalInformation.job ? generalInformation.job : "Poste souhaité"}</h4>
            <div>
                <h2>Informations personnelles</h2>
                <p>{generalInformation.phone ? "Téléphone: " + generalInformation.phone : "" }</p>
                <p>{generalInformation.address ? "Adresse: " + generalInformation.address : ""}</p>
                <p>{generalInformation.emailAddress ? "Adresse email: "+ generalInformation.emailAddress : ""}</p>
            </div>
        </>
    )
}

export default GeneralInformationDisplay