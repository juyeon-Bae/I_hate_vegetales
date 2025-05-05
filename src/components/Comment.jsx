import { useState, useEffect } from "react";
import axios from "axios";
import Line from "./Line";
import sendButton from "../assets/images/send.png"
import styles from "../styles/Comment.module.css"

export default function Comment() {
    const [comments, setComments] = useState([]);
    const [input, setInput] = useState("");

    //댓 가져오기
    useEffect(() => {
        axios.get("http://localhost:5000/comments")
            .then(res => setComments(res.data))
            .catch(err => console.err(err))
    }, [])

    //댓 작성
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        try {
            const res = await axios.post("http://localhost:5000/comments", {
                content: input,
            });
            setComments([res.data, ...comments]) //최신 댓글 위에
            setInput("")
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div>
            <Line />
            <p className={styles.encouragement}>격려의 한마디 🍀</p>

            <div>
                {comments.map((comment, index) => (
                    <div key={index}>
                        <p>{comment.content}</p>
                        <span>{new Date(comment.date).toLocaleString()}</span>
                    </div>
                ))}
            </div>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="댓글을 작성해주세요"
                />
                <button>
                    <img src={sendButton} />
                </button>
            </form>
        </div>
    )
}