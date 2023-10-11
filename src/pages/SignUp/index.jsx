import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { api } from "../../services/api"

import { Container, Logo } from "./styles";

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"

export function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleSignUp() {
        if (!name || !email || !password) {
            return alert("Preencha todos os campos!");
        }

        api.post("/users", { name, email, password })
            .then(() => {
                alert("Usuário cadastrado com sucesso!");
                navigate("/");
            })
            .catch(error => {
                if(error.response) {
                    alert(error.response.data.message);
                } else {
                    alert("Não foi possível cadastrar");
                }
            })
    }

    return(
        <Container>
            <Logo>
                <svg width="39" height="44" viewBox="0 0 39 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.6574 0L38.4133 10.8287V32.4862L19.6574 43.3149L0.901548 32.4862V10.8287L19.6574 0Z" fill="#065E7C"/>
                </svg>
                <h1>food explorer</h1>
            </Logo>

            <p>Seu nome</p>
            <Input
                type="text"
                placeholder="Exemplo: Maria da Silva"
                onChange={e => setName(e.target.value)}
            />

            <p>E-mail</p>
            <Input
                type="text"
                placeholder="Exemplo: exemplo@exemplo.com.br"
                onChange={e => setEmail(e.target.value)}
            />

            <p>Senha</p>
            <Input
                type="password"
                placeholder="No mínimo 6 caracteres"
                onChange={e => setPassword(e.target.value)}
            />

            <Button title="Criar Conta" onClick={handleSignUp} />

            <Link to="/">
                <ButtonText title="Já tenho uma conta" />
            </Link>

        </Container>
    )
}