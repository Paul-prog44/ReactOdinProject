import Input from "./Input"

function GeneralInformation() {
    return (
        <>
            <h2>Informations générales</h2>
            <Input name="name" label="Nom"/>
            <Input name="lastname" label="Nom de famille"/>
            <Input name="phone" label="Numéro de téléphone"/>
            <Input name="address" label="Adresse"/>
            <Input name="emailAddress" label="Adresse éléctronique"/>
        </>
    )
}

export default GeneralInformation