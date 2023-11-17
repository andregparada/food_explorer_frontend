import { useEffect, useState } from "react";

import { api } from "../../services/api";

import macarrons from "../../assets/macarrons.png"
import macarrons_big from "../../assets/macarrons_big.png"

import { Navbar } from "../../components/Navbar"
import { Footer } from "../../components/Footer"
import { Card } from "../../components/Card";

import { Container, Content, Dishes, Header } from "./styles";

export function Home() {
    const [dishes, setDishes] = useState([])

    useEffect(() => {
        async function fetchDishes() {
            const response = await api.get("/menu");
            setDishes(response.data);
            response.data.map(dish => {
                dish.image = `${api.defaults.baseURL}/files/${dish.image}`
            })
        }
        fetchDishes();
    }, []);



    return( 
        <Container>
            
            <Navbar />
            <main>
                <Content>         
                    <Header>
                        <img className="image-mobile" src={macarrons} alt="macarrons" />
                        <img className="image-desktop" src={macarrons_big} alt="macarrons" />
                        <h2>Sabores inigualáveis</h2>
                        <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                    </Header>

                    <h3>Entradas</h3>
                    <div className="card-wrapper">
                        {
                            dishes.map(dish => {
                                if (dish.categorie === "starter"){                                    
                                    return (
                                        <Dishes>
                                            <Card
                                                key={String(dish.id)}
                                                source={dish.image}
                                                alt={dish.name}
                                                name={dish.name}
                                                price={dish.price}
                                                id={dish.id}
                                                description={dish.description}
                                            />
                                        </Dishes>
                                    )
                                }
                            })
                        }
                    </div>

                    <h3>Pratos Principais</h3>
                    <div className="card-wrapper">
                    {
                            dishes.map(dish => {
                                if (dish.categorie === "main"){                                    
                                    return (
                                        <Dishes>
                                            <Card
                                                key={String(dish.id)}
                                                source={dish.image}
                                                alt={dish.name}
                                                name={dish.name}
                                                price={dish.price}
                                                id={dish.id}
                                                description={dish.description}
                                            />
                                        </Dishes>
                                    )
                                }
                            })
                        }
                    </div>
                    
                    <h3>Sobremesas</h3>
                    <div className="card-wrapper">
                    {
                            dishes.map(dish => {
                                if (dish.categorie === "desert"){                                    
                                    return (
                                        <Dishes>
                                            <Card
                                                key={String(dish.id)}
                                                source={dish.image}
                                                alt={dish.name}
                                                name={dish.name}
                                                price={dish.price}
                                                id={dish.id}
                                                description={dish.description}
                                            />
                                        </Dishes>
                                    )
                                }
                            })
                        }
                    </div>

                </Content>   
            </main>

            <Footer />
        </Container>
    );
}