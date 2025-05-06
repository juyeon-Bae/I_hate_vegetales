import postButton from "../assets/images/postBtn.png"
import styles from "../styles/SelectGoalCard.module.css"
import Tag from "../components/Tag"
import SelectGoalCard from "../components/SelectGoalCard"
import Line from "../components/Line"
import NavBar from "../components/NavBar"

export default function SelectGoal() {
    const Tags = ['목표', '동기부여', '기록']

    const selectOptions = [{
        id: 1,
        value: "목표 작성하기",
        address: "/write-goal"
    },
    {
        id: 2,
        value: "목표 보기",
        address: "/goal"
    },
    ]

    return (
        <div style={{ width: "390px", margin: "auto" }}>
            <div style={{ paddingLeft: "30px" }}>
                <p className={`${styles.p} ${styles.partP}`}>🌱 작은 실천이 큰 변화를 만들어요.</p>
                <p className={styles.p}>목표를 써보며 하루하루를 채워보세요!</p>
                <div className={styles.tagContainer}>
                    {Tags.map((item) => (
                        <Tag value={item} key={item} />
                    ))}
                </div>
            </div>
            <div style={{ margin: "37px 0 30px" }}><Line /></div>


            <div className={styles.selectContainer}>
                {selectOptions.map((item) => (
                    <SelectGoalCard
                        key={item.id}
                        value={item.value}
                        address={item.address}
                    />
                ))}
            </div>
            <NavBar />
        </div>
    )
}