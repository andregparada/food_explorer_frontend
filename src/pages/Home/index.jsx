import { Container, Content, Dishes, Header } from "./styles";

import { Navbar } from "../../components/Navbar"
import { Footer } from "../../components/Footer"
import { Card } from "../../components/Card";

import salada_ravanello from "../../assets/dishes/salada_ravanello_small.png"
import macarrons from "../../assets/macarrons.png"

export function Home() {
    return( 
        <Container>
            <Navbar />
            <main>
                <Content>         
                    <Header>
                        <img src={macarrons} alt="macarrons" />
                        <h2>Sabores inigualáveis</h2>
                        <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                    </Header>

                    <h3>Entradas</h3>
                    <Dishes>
                        <Card 
                            source={salada_ravanello}
                            alt="salada ravanello"
                            name="Salada Ravanello >"
                            price="R$ 49,97"
                        />
                    </Dishes>

                    <h3>Pratos Principais</h3>
                    <Dishes>
                        <Card 
                            source={salada_ravanello}
                            alt="salada ravanello"
                            name="Salada Ravanello >"
                            price="R$ 49,97"
                        />
                    </Dishes>
                    
                    <h3>Pratos Principais</h3>
                    <Dishes>
                        <Card 
                            source={salada_ravanello}
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