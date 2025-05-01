import React from "react";
import TopBar from "../components/TopBar";
import ViewGoals from "../components/ViewGoals";
export default function Goal() {
    return (
        <div>
            <div style={{ marginBottom: "7px" }}>
                <TopBar address={'/Home'} value={"목표"} />
            </div>
            <ViewGoals content={"야채 많이 먹기"} />
        </div>
    )
}