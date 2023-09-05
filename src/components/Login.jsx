import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/slices/auth-slice";
import { TrelloIcon } from "../assets";
import { styled } from "styled-components";
import { useNavigate } from "react-router";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleLogin = (e) => {
    dispatch(login({ email, password }));
    e.preventDefault()
  };

  return (
    <LoginContainer>
      <Title>
        <TrelloIconStyled /> Trello
      </Title>
      <Container>
        <StyledEntrance>Вход в Trello</StyledEntrance>
        <Input
          placeholder="Укажите адрес электронной почты"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Введите пароль"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleLogin}>
          Продолжить
        </Button>
        <hr style={{ width: "80%" }} />
        <Link href="#">Не удается войти?</Link>
        <Link href="#">Зарегистрировать аккаунт</Link>
      </Container>
      <div>
        <Link href="#">Политика конфиденциальности</Link>
        <Link href="#">Условия использования</Link>
      </div>

      {isAuthenticated && navigate('/lists')}
    </LoginContainer>
  );
}

export default Login;

const StyledEntrance = styled("h2")`
  color: #637088;
  margin-bottom: 1rem;
`;

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 33%;
  height: 30rem;
  box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
  background-color: white;
  border-radius: 5px;
  gap: 1rem;
  & a{
    font-size: 18px;
  }
`;

const Title = styled("h1")`
  font-family: "Avenir Next", sans-serif;
  color: #253859;
  font-size: 3.8rem;
  font-weight: 700;
`;

const TrelloIconStyled = styled(TrelloIcon)`
  width: 2.9rem;
  height: 2.9rem;
`;

const Input = styled("input")`
  width: 80%;
  height: 3rem;
  padding: 10px;
  border: 2px solid #dfe1e5;
  border-radius: 4px;
  font-size: 18px;
  &:focus {
    outline: 1.6px solid #4c9aff;
    border: 1.5px solid #4c9aff;
  }
`;

const LoginContainer = styled("form")`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f9fafc;
  gap: 2rem;
  & div {
    display: flex;
    gap: 1.5rem;
  }
`;

const Link = styled('a')`
  text-decoration: none;
  color: #2466d2;
`

const Button = styled("button")`
  width: 80%;
  height: 2.5rem;
  color: white;
  background-color: #59ac44;
  border: none; 
  border-radius: 5px;
  font-size: 18px;
  font-weight: 600;
`