import { Container } from "./styles";

export function Input({ icon, ...rest }) {
    return(
        <Container {...rest}>
            {icon}
            <input {...rest} />
        </Container>
    )
}