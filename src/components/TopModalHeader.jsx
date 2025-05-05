import { useNavigate } from "react-router-dom"
import styled from "styled-components";
import prevBtn from "../assets/images/prevBtn.png"
import ModalIcon from "../assets/images/modal.png"
import { useState } from "react";
import Modal from "./Modal";

const TopModalHeaderAllContainer = styled.div`
display: flex;
gap: 116px;
padding: 16px 32px;
background: #FFF;
box-shadow: 0px 2px 5.6px 0px rgba(0, 0, 0, 0.08);
`

export default function TopModalHeader() {
    const navigate = useNavigate();
    const [modal, setModal] = useState(false);
    const handleModalClick = () => {
        setModal((prev) => !prev)
    }

    return (
        <TopModalHeaderAllContainer>
            <img
                src={prevBtn}
                style={{ width: "15px", height: "25px", cursor: "pointer" }}
                onClick={() => navigate('/home')}
                alt="뒤로가기" />

            <p>게시물</p>

            <img
                src={ModalIcon}
                onClick={handleModalClick}
                style={{ width: "5px", height: "24px", cursor: "pointer" }}
                alt="모달 아이콘" />

            {modal && <Modal />}
        </TopModalHeaderAllContainer>
    )
}