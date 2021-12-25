import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Chat from "../../assets/illustration-chat.svg";
import Arrow from "../../assets/icon-arrow.svg";
import Trash from "../../assets/icon-trash.svg";

import H1 from "../../Components/Title"
import ContainerItens from "../../Components/ContainerItens"
import Button from "../../Components/button"

import { Container, Image, User } from "./styles";

const Users = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchUsers() {
      const { data: newUsers } = await axios.get("http://localhost:3001/users");
      setUsers(newUsers);
    }
    
    fetchUsers();
  }, []);

  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`);

    const newUsers = users.filter((user) => user.id !== userId);
    setUsers(newUsers);
  }

  function goBackPage() {
    navigate("/")
  }

  return (
    <Container>
      <Image src={Chat} alt="illustration-Chat" />

      <ContainerItens isBlur={true}>
        <H1>Usuários</H1>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt="icon-trash" />
              </button>
            </User>
          ))}
        </ul>

        <Button isBack={true} onClick={goBackPage}>
          <img src={Arrow} alt="icon-arrow" />
          Voltar
        </Button>
      </ContainerItens>
    </Container>
  );
};

export default Users;
