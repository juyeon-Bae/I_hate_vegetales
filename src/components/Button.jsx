import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Button.module.css"
export default function Button({ value, address }) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`${address}`)
    }
    return (
        <div className={styles.btnContainer}
            onClick={handleClick}
        >
            <span className={styles.value}>{value}</span>
        </div>
    )
}