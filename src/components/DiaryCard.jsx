import styles from "../styles/DiaryCard.module.css";

export default function DiaryCard({ title, content }) {
    return (
        <div className={styles.diaryCardAllContainer}>
            <div>
                <p className={styles.titleText}>{title}</p>
                <p className={styles.contentText}>{content}</p>
            </div>
        </div>
    )
}