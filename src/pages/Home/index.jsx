import { useEffect, useState, useRef } from "react";
import { register } from 'swiper/element/bundle';

import { Container, Content, Dishes, Header } from "./styles";

import { api } from "../../services/api";

import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/roles";

import { Navbar } from "../../components/Navbar"
import { Footer } from "../../components/Footer"
import { Card } from "../../components/Card";

import macarrons from "../../assets/macarrons.png"

register();

export function Home() {
    const { user } = useAuth();

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
                        <img src={macarrons} alt="macarrons" />
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