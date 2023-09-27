import { Container, Content, Dishes, Header } from "./styles";

import { Navbar } from "../../components/Navbar"
import { Footer } from "../../components/Footer"

export function Home() {
    return( 
        <Container>
            <Navbar />
            <main>
                <Content>         
                    <Header>
                        <img src="src\assets\macarrons.png" alt="macarrons" />
                        <h2>Sabores inigualáveis</h2>
                        <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                    </Header>

                    <h3>Refeições</h3>
                    <Dishes>
                        
                    </Dishes>
                </Content>   
            </main>

            <Footer />
        </Container>
    );
}