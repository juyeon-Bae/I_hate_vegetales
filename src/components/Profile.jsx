import Tag from "./Tag";
import styles from "../styles/Profile.module.css"
import ProfileImg from "../assets/images/profile.png"
export default function Profile({ userName }) {
    const Tags = ["건강", "편식일기", "기록"]
    return (
        <div className={styles.ProfileAllContainer}>
            <div className={styles.userInfomationContainer}>
                <img src={ProfileImg} style={{ width: "84px", height: "84px" }} />
                <div style={{ display: "flex", flexDirection: "column" }}>
                    {/* 사용자 이름 */}
                    <p className={styles.userName}>{userName}</p>
                    <div className={styles.line}></div>
                </div>
            </div>
            <div style={{ display: "flex", gap: "6px" }}>
                {Tags.map((item, index) => (
                    <Tag key={index} value={item} />
                ))}

            </div>
        </div>
    )
}