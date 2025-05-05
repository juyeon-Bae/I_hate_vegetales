import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/LogoutPopUp.module.css";

export default function LogoutPopUp() {
    const navigate = useNavigate();
    const handleLogOut = () => { navigate('/login') }
    const handleGoBack = () => { navigate('/my-page') }
    return (
        <div className={styles.backGround}>
            <div className={styles.popupCardContainer}>
                <span className={styles.logoutMent}>로그아웃 하시겠습니까?</span>

                <div className={styles.selectContainer}>
                    <p onClick={handleGoBack} className={`${styles.selectOption} ${styles.back}`}>돌아가기</p>
                    <p onClick={handleLogOut}
                        className={styles.selectOption}>로그아웃</p>
                </div>
            </div>

        </div>
    )
}