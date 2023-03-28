import Fafa from "./input.module.css";

const Input = ({name, Icon, placeholder, type, setter}) => {

    const handleChange = (event) => {
        console.log(event.target.value);
        setter((data) => ({...data,[name]:event.target.value }))
    }

    return (
        <div className={Fafa.username} > 
            <Icon  />
            <input onChange={handleChange} type={ type || "text" } name={name} placeholder={placeholder} />
        </div>
    )
}

export default Input;