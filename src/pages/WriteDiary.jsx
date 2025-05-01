import { useState } from "react";
import axios from "axios";
import TopBar from "../components/TopBar";
import Button from "../components/Button";
import addPhoto from "../assets/images/addPhoto.png"
import styles from "../styles/Write.module.css"
export default function Write() {
    const [formData, setFormData] = useState({
        title: '',
        content: '',
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    return (
        <div className={styles.allContainer}>
            <TopBar value={"글쓰기"} address={'/home'} />
            <div className={styles.mainContainer}>
                <div className={styles.contentContainer} style={{ marginTop: "29px" }}>
                    <label className={styles.title}>제목</label>
                    <input className={`${styles.writeBox} ${styles.input}`}
                        placeholder="제목을 입력해주세요."
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className={styles.contentContainer}>
                    <label className={styles.title}>내용</label>
                    <textarea className={`${styles.writeBox} ${styles.textarea}`}
                        placeholder="내용을 작성해주세요."
                        name="content"
                        value={formData.content}
                        onChange={handleChange}
                    />
                </div>

                <div className={styles.contentContainer}>
                    <span className={`${styles.title} ${styles.title2}`}>사진</span>
                    <p style={{ fontSize: "12px", color: "#AAA", marginBottom: "16px" }}>사진을 업로드해주세요</p>
                    <img src={addPhoto} className={styles.upload} />
                </div>
                <Button value={'작성하기'} />
            </div>
        </div>
    )
}