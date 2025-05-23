import TopBar from "../components/TopBar";
import Line from "../components/Line";
import btn from "../assets/images/afterbtn.png"
import NavBar from "../components/NavBar";
import LogoutPopUp from "../components/LogOutCheckPopUp";
import { useNavigate } from "react-router-dom";
export default function MyPage() {
    const navigation = useNavigate();
    const handleLogOut = () => {
        navigation('/popup');
    }
    return (
        <div style={{ width: "390px", margin: "auto" }}>
            <TopBar address={'/Home'} value={"마이페이지"} />
            <div
                onClick={handleLogOut}
                style={{
                    padding: "0 53px 0 41px",
                    margin: "44px 0 33px 0",
                    display: "flex",
                    justifyContent: "space-between"
                }}>
                <span
                    style={{ color: "#E64234", fontSize: "16px" }}
                >로그아웃</span>
                <img src={btn}
                    style={{ width: "10px", height: "17px" }}
                />
            </div>
            <Line />
            <NavBar />
        </div>
    )
}