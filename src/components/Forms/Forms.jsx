import Fafa from "./form.module.css";
import Input from "../Input/input.jsx";
import { UilEnvelope,UilLockAlt } from '@iconscout/react-unicons'
import { validation } from "../../Helpers/validation";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validate } from "../../redux/action";
import { useDispatch } from "react-redux";

const Forms = () => {

    const dispatch = useDispatch()
    const [error,setErrors] = useState({});
    const navigate= useNavigate()
    const [userData,setUserData] = useState({});    
    const submmit = (event) => {
    //esto va hacer que evite el comportamiento default del form, (resetar la pagina).
        event.preventDefault()
        if (validation(userData,setErrors)) {
            dispatch(validate());
            navigate("/home");
        }
    }

    return ( 
        <div className={Fafa.form}>
        <form className={Fafa.form} onSubmit={submmit}  >
           <Input setter={setUserData} name={"username"} Icon={UilEnvelope} placeholder="Email"/>
           <span>{error.username}</span>
           <Input setter={setUserData} name={"password"} Icon={UilLockAlt} placeholder="Password" type="password"/>
           <span >{error.password}</span>
            <button className={Fafa.button} typ="submit"> Login </button>
        </form>    
        </div>
    )
}

export default Forms;