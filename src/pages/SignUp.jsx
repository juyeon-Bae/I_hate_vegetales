
import Button from "../components/Button"
import InputField from "../components/InputField"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import PrevBtn from "../assets/images/prevBtn.png"

export default function SignUp() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: "",
        user_id: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    return (
        <div style={{ width: "390px" }}>
            <div style={{
                fontSize: "24px", fontWeight: 700, lineHeight: "140%",
                padding: "45px 38px"
            }}>
                <img src={PrevBtn} style={{ width: "15px", height: "25px", marginBottom: "38px" }}
                    onClick={() => navigate('/login')} />

                <p>반가워요!</p>
                <p>정보를 작성해주세요.</p>

                <form style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "25px", marginTop: "30px"
                }}>
                    {/*사용자 이름*/}
                    <InputField
                        type="text"
                        name="username"
                        value={formData.username}
                        placeholder="이름을 작성해주세요."
                        onChange={handleChange}
                    />

                    {/*사용자 아이디*/}
                    <InputField
                        type="text"
                        name="user_id"
                        value={formData.user_id}
                        placeholder="아이디를 입력해 주세요"
                        onChange={handleChange}
                    />

                    {/*사용자 비밀번호*/}
                    <InputField
                        type="password"
                        name="password"
                        value={formData.password}
                        placeholder="비밀번호를 입력해 주세요."
                        onChange={handleChange}
                    />
                    <div style={{ marginTop: "220px" }}><Button value={"가입하기"} /></div>
                </form>
            </div>
        </div>
    )
}