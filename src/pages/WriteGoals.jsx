import TopBar from "../components/TopBar"
import Button from "../components/Button"
import styles from "../styles/WriteGoal.module.css"
export default function WriteGoals() {
    return (
        <div className={styles.allContainer}>
            <TopBar address={'/goal'} />
            <div style={{ marginTop: "21px" }}>
                <p className={styles.description}>더 건강한 생활을 위해</p>
                <p className={styles.description}>목표를 작성해 주세요!</p>
            </div>
            <div className={styles.menu}>
                <img className={styles.img}
                    src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Backhand%20Index%20Pointing%20Down%20Light%20Skin%20Tone.png" alt="Backhand Index Pointing Down Light Skin Tone" width="25" height="25" />
                <div style={{ marginBottom: "170px" }}>
                    <textarea className={styles.textarea}
                        placeholder="목표를 작성해주세요."
                    />
                </div>
            </div>
            <Button value={"작성하기"} />
        </div>
    )
}