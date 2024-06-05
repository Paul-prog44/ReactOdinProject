import Input from "./Input"

function GeneralInformation({generalInformation, handleChange}) {
    


    return (
        <>
            <h2>Informations générales</h2>
            <Input name="name" label="Prénom" type="text" value={generalInformation.name} onInputChange={handleChange}/>
            <Input name="lastname" label="Nom de famille" type="text" value={generalInformation.lastname} onInputChange={handleChange}/>
            <Input name="job" label="Poste souhaité" type="text" value={generalInformation.job} onInputChange={handleChange}/>
            <Input name="phone" label="Numéro de téléphone" type="number" value={generalInformation.phone} onInputChange={handleChange}/>
            <Input name="address" label="Adresse" type="text" value={generalInformation.address} onInputChange={handleChange}/>
            <Input name="emailAddress" label="Adresse éléctronique" type="email" value={generalInformation.emailAddress}  onInputChange={handleChange}/>
        </>
    )
}

export default GeneralInformation