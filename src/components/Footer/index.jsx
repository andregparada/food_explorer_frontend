import { Container, Logo } from "./styles";

export function Footer() {
    return(
        <Container>
            <Logo>
                <svg className="polygon-mobile" width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.76352 0.667969L19.2898 5.16797V14.168L9.76352 18.668L0.23724 14.168V5.16797L9.76352 0.667969Z" fill="#4D585E"/>
                </svg>
                <svg className="polygon-desktop" width="27" height="31" viewBox="0 0 27 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.5391 0.909359L26.5294 8.40936V23.4094L13.5391 30.9094L0.548681 23.4094V8.40936L13.5391 0.909359Z" fill="#4D585E"/>
                </svg>

                <h2>food explorer</h2>
            </Logo>
            <p>© 2023 - Todos os direitos reservados.</p>
        </Container>
    )
}