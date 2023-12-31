import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { useAuth } from "../../hooks/auth";

import { USER_ROLE } from "../../utils/roles"

import { ButtonText } from "../../components/ButtonText";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";

import { Container, Header, Content } from "./styles";

export function Menu() {
    const { signOut, user } = useAuth();

    const navigate = useNavigate();

    const [dishes, setDishes] = useState([])
    const [search, setSearch] = useState("")

    function handleDish(id){
        navigate(`/dish/${id}`)
    };

    useEffect(() => {
        async function fetchDishes() {
            const response = await api.get(`/dishes?search=${search}`);
            setDishes(response.data);
        }
        fetchDishes();
    }, [search]);

    return (
        <Container>
            <Header>
                <Link to="/">                    
                    <ButtonText
                        icon={
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.263604 0.263604C0.615076 -0.0878679 1.18492 -0.0878679 1.5364 0.263604L9 7.72721L16.4636 0.263604C16.8151 -0.0878679 17.3849 -0.0878679 17.7364 0.263604C18.0879 0.615076 18.0879 1.18492 17.7364 1.5364L10.2728 9L17.7364 16.4636C18.0879 16.8151 18.0879 17.3849 17.7364 17.7364C17.3849 18.0879 16.8151 18.0879 16.4636 17.7364L9 10.2728L1.5364 17.7364C1.18492 18.0879 0.615076 18.0879 0.263604 17.7364C-0.0878679 17.3849 -0.0878679 16.8151 0.263604 16.4636L7.72721 9L0.263604 1.5364C-0.0878679 1.18492 -0.0878679 0.615076 0.263604 0.263604Z" fill="white"/>
                            </svg>}
                        title="Menu"
                    />
                </Link>
            </Header>

            <main>
                <Content>
                    <Input 
                        icon={<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.85593 1.61739C5.1902 0.725854 6.75888 0.25 8.3636 0.25H8.36365C10.5154 0.250137 12.5791 1.105 14.1006 2.62655C15.6222 4.14811 16.4771 6.21174 16.4772 8.36355V8.36359C16.4772 9.96831 16.0013 11.537 15.1098 12.8713C14.9533 13.1054 14.7853 13.3305 14.6065 13.5459L19.5303 18.4697C19.8232 18.7626 19.8232 19.2374 19.5303 19.5303C19.2374 19.8232 18.7626 19.8232 18.4697 19.5303L13.5459 14.6065C12.9235 15.1232 12.224 15.5467 11.4685 15.8596C9.98597 16.4737 8.3546 16.6344 6.78071 16.3213C5.20683 16.0082 3.76113 15.2355 2.62642 14.1008C1.49171 12.9661 0.718969 11.5204 0.405904 9.94648C0.0928393 8.37259 0.253515 6.74122 0.867614 5.25866C1.48171 3.77609 2.52165 2.50892 3.85593 1.61739ZM8.36355 1.75C7.05552 1.75001 5.77687 2.13789 4.68928 2.86459C3.60168 3.5913 2.754 4.6242 2.25343 5.83268C1.75287 7.04116 1.6219 8.37093 1.87708 9.65384C2.13227 10.9368 2.76215 12.1152 3.68708 13.0401C4.61201 13.965 5.79044 14.5949 7.07335 14.8501C8.35626 15.1053 9.68604 14.9743 10.8945 14.4738C12.103 13.9732 13.1359 13.1255 13.8626 12.0379C14.5893 10.9503 14.9772 9.67167 14.9772 8.36364M8.3636 1.75C10.1176 1.75012 11.7997 2.44695 13.04 3.68721C14.2802 4.92748 14.9771 6.6096 14.9772 8.36359" fill="#C4C4CC"/>
                            </svg>}
                        placeholder="Busque por pratos ou ingredientes"
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    {
                        dishes && dishes.map(dish => (
                            <div 
                                key={String(dish.id)} 
                                onClick={() => handleDish(dish.id)}
                            >
                                <ButtonText title={dish.name} />
                            </div>
                        ))
                    }

                    <Link to="/">
                        <ButtonText title="Sair" onClick={signOut} />
                    </Link>

                    { user.role === USER_ROLE.ADMIN && 
                        <Link to="/newdish">
                            <ButtonText title="Novo Prato" />
                        </Link>
                    }
                </Content>
            </main>

            <Footer />
        </Container>
    )
}

