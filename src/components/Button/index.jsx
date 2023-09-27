import { Container } from "./styles";

export function Button({ icon, title, loading = false, ...rest }){
    return(
        <Container
            type="button"
            disabled={loading}
            {...rest}
        >
            { loading ? "" : icon }
            { loading ? 'Carregando' : title }
        </Container>
    );
}