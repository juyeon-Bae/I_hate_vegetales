import React from "react";
import { useNavigate } from "react-router-dom";
import PrevBtn from "../assets/images/prevBtn.png"
export default function TopBar({ value, address }) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`${address}`)
    }
    return (
        <div style={{ display: "flex", alignItems: "center", padding: "16px 32px", marginTop: "20px" }}>
            <img src={PrevBtn}
                style={{ width: "15px", height: "25px", cursor: "pointer" }}
                onClick={handleClick}
            />

            <span style={{ textAlign: "center", margin: "auto", fontSize: "22px" }}>{value}</span>
        </div>
    )
}