function Input({name, label, type, value, onInputChange }) {

    const handleChange = (event) => {
        // Appelle la fonction passée en props pour mettre à jour l'état du parent
        onInputChange(name, event.target.value);
      };

    return (
        <label>{label}: <input name ={name} id={name} value={value} type={type} onChange={handleChange}></input></label>
    )
}

export default Input