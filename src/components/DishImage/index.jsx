import { Container } from "./styles";

export function DishImage({ source, alt, description }) {
    return(
        <Container>
            <img src={source} alt={alt} />
            <label>{description}</label>
        </Container>
    )
}