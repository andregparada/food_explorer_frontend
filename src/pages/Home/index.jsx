import { Container, Content, Dishes, Header } from "./styles";

import { Navbar } from "../../components/Navbar"
import { Footer } from "../../components/Footer"
import { Card } from "../../components/Card";

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

                    <h3>Entradas</h3>
                    <Dishes>
                        <Card 
                            source="src\assets\dishes\salada_ravanello_small.png"
                            alt="salada ravanello"
                            name="Salada Ravanello >"
                            price="R$ 49,97"
                        />
                    </Dishes>

                    <h3>Pratos Principais</h3>
                    <Dishes>
                        <Card 
                            source="src\assets\dishes\salada_ravanello_small.png"
                            alt="salada ravanello"
                            name="Salada Ravanello >"
                            price="R$ 49,97"
                        />
                    </Dishes>
                    
                    <h3>Pratos Principais</h3>
                    <Dishes>
                        <Card 
                            source="src\assets\dishes\salada_ravanello_small.png"
                            alt="salada ravanello"
                            name="Salada Ravanello >"
                            price="R$ 49,97"
                        />
                    </Dishes>

                </Content>   
            </main>

            <Footer />
        </Container>
    );
}