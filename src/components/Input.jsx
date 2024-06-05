function Input({label, name}) {
    return (
        <label>{label}: <input name ={name} id={name}></input></label>
    )
}

export default Input