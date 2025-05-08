import React, { useEffect, useState } from "react";
import axios from "axios";
import TopBar from "../components/TopBar";
import ViewGoals from "../components/ViewGoals";
import NavBar from "../components/NavBar";

export default function Goal() {
    const [goals, setGoals] = useState([]);

    //목표 불러오기
    const fetchGoals = async () => {
        const res = await axios.get("http://localhost:5000/goal")
        setGoals(res.data)
    }

    //삭제 요청
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/goal/${id}`);
            setGoals(goals.filter(goal => goal._id !== id)); // 삭제된 목표 제거
        } catch (err) {
            console.error("삭제 오류", err);
        }
    };

    useEffect(() => {
        fetchGoals()
    }, [])

    return (
        <div style={{ width: "390px", margin: "auto" }}>
            <div style={{ marginBottom: "7px" }}>
                <TopBar address={'/select'} value={"목표"} />
            </div>
            {goals.map((goal) => (
                <ViewGoals key={goal._id}
                    id={goal._id}
                    content={goal.content}
                    onDelete={handleDelete}
                />
            ))}
            <NavBar />
        </div>
    );
}
