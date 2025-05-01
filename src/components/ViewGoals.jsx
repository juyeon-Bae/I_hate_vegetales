import styles from "../styles/ViewGoals.module.css"
import Alram from "../assets/images/alram.png"
export default function ViewGoals({ content }) {
    return (
        <div className={styles.allContainer}>
            <div className={styles.contentContainer}>
                <img src={Alram} className={styles.img} />
                <div style={{ width: "290px" }}>
                    <div className={styles.titleContainer}>
                        <p style={{ fontSize: "15px", fontWeight: 600 }}>목표 보기</p>
                        <p style={{ fontSize: "12px", color: "#CCC" }}>삭제하기</p>
                    </div>
                    <p style={{ fontSize: "15px", marginTop: "7px" }}>{content}</p>
                </div>
            </div>
        </div>
    )
}