import { useState } from "react";

import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

import { Container, Logo } from "./styles";

export function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { signIn } = useAuth();

    function handleSignIn() {
        signIn({ email, password })
    }

    return(
        <Container>
            <Logo>
                <svg width="39" height="44" viewBox="0 0 39 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.6574 0L38.4133 10.8287V32.4862L19.6574 43.3149L0.901548 32.4862V10.8287L19.6574 0Z" fill="#065E7C"/>
                </svg>
                <h1>food explorer</h1>
            </Logo>

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

            <Button title="Entrar" onClick={handleSignIn} />

            <Link to="/register">
                <ButtonText title="Criar uma conta" />
            </Link>

        </Container>
    )
}