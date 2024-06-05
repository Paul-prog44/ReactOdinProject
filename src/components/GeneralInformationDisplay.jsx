function GeneralInformationDisplay({generalInformation}) {

    return (
        <>
            <h2>{generalInformation.name ? generalInformation.name : "Votre nom"}{" " + generalInformation.lastname}</h2>
            <p>{generalInformation.job ? generalInformation.job : "Poste souhaité"}</p>
            <div>
                <h3>Informations personnelles</h3>
                <p>{generalInformation.phone ? "Téléphone: " + generalInformation.phone : "" }</p>
                <p>{generalInformation.address ? "Adresse: " + generalInformation.address : ""}</p>
                <p>{generalInformation.emailAddress ? "Adresse email: "+ generalInformation.emailAddress : ""}</p>
            </div>
        </>
    )
}

export default GeneralInformationDisplay