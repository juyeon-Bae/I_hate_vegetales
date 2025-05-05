import styled from "styled-components"

const ModalContainer = styled.div`
display: flex;
flex-direction: column;
width: 100px;
 
padding: 10px 20px;
justify-content: center;
align-items: center;
gap: 10px; 
border-radius: 6px;
background: #FFF;
box-shadow: 1px 2px 12.7px 0px rgba(0, 0, 0, 0.08);

position:absolute;
left:55%;
top:5%;
`
const Delete = styled.p`
white-space: nowrap;
color: #F40000;
font-size: 14px;
font-weight: 500;
`
const Edit = styled.p`
white-space: nowrap;
font-weight: 500;
font-size: 14px;
`
export default function Modal() {
    return (
        <ModalContainer>
            <Delete>게시물 삭제</Delete>
            <Edit>게시물 수정</Edit>
        </ModalContainer>
    )
}