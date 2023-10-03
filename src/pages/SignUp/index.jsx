import { Link } from "react-router-dom";

import { Container, Logo } from "./styles";

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"

export function SignUp() {
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
            />

            <p>E-mail</p>
            <Input
                type="text"
                placeholder="Exemplo: exemplo@exemplo.com.br"
            />

            <p>Senha</p>
            <Input
                type="password"
                placeholder="No mínimo 6 caracteres"
            />

            <Button title="Criar Conta" />

            <Link to="/">
                <ButtonText title="Já tenho uma conta" />
            </Link>

        </Container>
    )
}