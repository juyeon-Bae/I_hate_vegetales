import styles from "../styles/SelectGoalCard.module.css";
import nextBtn from "../assets/images/nextbtn.png";
import { useNavigate } from "react-router-dom";
export default function SelectGoalCard({ value, address }) {
    const navigate = useNavigate();
    const handleOnClick = () => { navigate(`${address}`) }
    return (
        <div onClick={handleOnClick} className={styles.cardContainer}>
            <p className={styles.selectText}>{value}</p>
            <img src={nextBtn} className={styles.img} />
        </div>
    )
}