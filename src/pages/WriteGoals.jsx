import axios from "axios"
import { useState } from "react"
import TopBar from "../components/TopBar"
import Button from "../components/Button"
import NavBar from "../components/NavBar"
import styles from "../styles/WriteGoal.module.css"
import { useNavigate } from "react-router-dom";

export default function WriteGoals() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({ content: "" });
    const handleChange = (e) => { setFormData({ ...formData, [e.target.name]: e.target.value }) }

    //목표 저장 api 연결
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/goal', formData)
            console.log("목표 저장 성공", response.data)
            alert('작성 되었습니다.')
            navigate('/goal')
        } catch (err) {
            console.error('error발생', err)
        }
    }
    return (
        <div className={styles.allContainer}>
            <TopBar address={'/select'} />
            <div style={{ marginTop: "21px" }}>
                <p className={styles.description}>더 건강한 생활을 위해</p>
                <p className={styles.description}>목표를 작성해 주세요!</p>
            </div>

            <form onSubmit={handleSubmit} className={styles.menu}>
                <img className={styles.img}
                    src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Backhand%20Index%20Pointing%20Down%20Light%20Skin%20Tone.png" alt="Backhand Index Pointing Down Light Skin Tone" width="25" height="25" />

                <div style={{ marginBottom: "100px" }}>
                    <textarea
                        className={styles.textarea}
                        placeholder="목표를 작성해주세요."
                        onChange={handleChange}
                        name="content"
                        value={formData.content}
                    />
                </div>

                <Button value={"작성하기"} type="submit" />
            </form>
            <NavBar />
        </div>
    )
}