import React from "react";
import TopBar from "../components/TopBar";
import ViewGoals from "../components/ViewGoals";
import NavBar from "../components/NavBar";
export default function Goal() {
    return (
        <div style={{ width: "390px", margin: "auto" }}>
            <div style={{ marginBottom: "7px" }}>
                <TopBar address={'/select'} value={"목표"} />
            </div>
            <ViewGoals content={"야채 많이 먹기"} />
            <NavBar />
        </div>
    )
}