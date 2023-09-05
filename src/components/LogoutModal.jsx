import React from "react";
import { styled } from "styled-components";

const LogoutModal = ({ onLogoutConfirmed, onLogoutCancelled }) => {
  return (
    <ModalContainer>
      <ModalContent>
        <h2>Вы точно хотите выйти?</h2>
        <ButtonContainer>
          <Button onClick={onLogoutConfirmed}>Да</Button>
          <Button onClick={onLogoutCancelled}>Нет</Button>
        </ButtonContainer>
      </ModalContent>
    </ModalContainer>
  );
};

const ModalContainer = styled("div")`
  position: fixed;  
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled("div")`
  width: 20%;
  background-color: #282e33;
  border-radius: 5px;
  padding: 20px;
  text-align: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  & h2 {
    color: #9fadbc;
  }
`;

const ButtonContainer = styled("div")`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Button = styled("button")`
  margin: 0 30px;
  padding: 8px 16px;
  border: none;
  background-color: #007bff;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

export default LogoutModal;
