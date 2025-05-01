import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Button.module.css"
export default function Button({ value, address, type }) {
    const navigate = useNavigate();
    const handleClick = () => {
        if (address) navigate(address)
    }
    return (
        <button
            type={type}
            className={styles.btnContainer}
            onClick={handleClick}
        >
            <span className={styles.value}>{value}</span>
        </button>
    )
}