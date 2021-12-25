import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import People from "../../assets/illustration-people.svg";
import Arrow from "../../assets/icon-arrow.svg";

import H1 from "../../Components/Title"
import ContainerItens from "../../Components/ContainerItens";
import Button from "../../Components/button";

import {
  Container,
  Image,
  InputLabel,
  Input,
} from "./styles";

const App = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const inputName = useRef();
  const inputAge = useRef();

  async function addNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });

    setUsers([...users, newUser]);
    navigate("/usuarios");
  }

  return (
    <Container>
      <Image src={People} alt="illustration-peoples" />

      <ContainerItens>
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome"></Input>

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade"></Input>

        <Button to="/usuarios" onClick={addNewUser}>
          Cadastrar <img src={Arrow} alt="icon-arrow" />
        </Button>
      </ContainerItens>
    </Container>
  );
};

export default App;
