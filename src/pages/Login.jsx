import { useState } from "react"
import Logo from "../assets/images/Logo.png"
import InputField from "../components/InputField"
import Button from "../components/Button"
import axios from "axios"
import styles from "../styles/Login.module.css"

export default function Login() {
    const [formData, setFormData] = useState({ user_id: "", password: "" })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
    }


    return (
        <div className={styles.LoginAllContainer} >
            <img src={Logo} className={styles.Logo} />
            <form onSubmit={handleSubmit} className={styles.loginFormContainer}>
                {/*아이디 입력*/}
                <InputField
                    type="text"
                    name="user_id"
                    value={formData.user_id}
                    placeholder="아이디"
                    onChange={handleChange}
                    required
                />

                {/*비번 입력*/}
                <InputField
                    type="password"
                    name="password"
                    value={formData.password}
                    placeholder="비밀번호"
                    onChange={handleChange}
                    required
                />

                <div className={styles.btnContainer}>
                    <Button value={"로그인"} />
                    <Button value={"회원가입"} address={'/sign-up'} />
                </div>
            </form>
        </div>
    )
}