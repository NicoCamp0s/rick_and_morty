import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import Fafa from "./alert.module.css";
import { removeError } from "../../redux/action";

const Alert = () => {
    const dispatch = useDispatch()
    const error = useSelector(state => state.error) 
    const [mosError, SetError] = useState(false)
    const timeOut = useRef(null)

    useEffect(() => {
        if(error) {
            if(timeOut.current) clearTimeout(timeOut.current);
            SetError(true);
            timeOut.current = setTimeout(() => {
                dispatch(removeError())
                SetError(false);
            }, 5000);
            return () => {
                clearTimeout(timeOut.current);
            }
        } 
    }, [error]) 

    return mosError ? ( 
        <div>
            <h1 className={Fafa.alert}>{error}</h1>
        </div>
    ) : null;
}

export default Alert;