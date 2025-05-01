import React from "react";
import Tag from "../components/Tag";
import DiaryCard from "../components/DiaryCard";
export default function Home() {
    const Tags = ["건강", "편식일기", "기록"]
    return (
        <div style={{ width: "390px" }}>
            <div style={{ display: "flex", gap: "6px" }}>
                {Tags.map((item, index) => (
                    <Tag key={index} value={item} />
                ))}

            </div>

        </div>
    )
}