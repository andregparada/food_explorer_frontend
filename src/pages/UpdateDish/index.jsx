import { useState } from "react";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";

import { Container, Content } from "./styles";

import { Navbar } from "../../components/Navbar";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea";
import { Ingredients } from "../../components/Ingredients";
import { Button } from "../../components/Button"
import { Footer } from "../../components/Footer";

export function UpdateDish() {
    const { addDish } = useAuth();

    const [imageFile, setImageFile] =useState(null)
    const [name, setName] = useState("")
    const [categorie, setCategorie] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")

    const [ingredients, setIngredients] = useState([]);
    const[newIngredient, setNewIngredient] = useState("");

    const navigate = useNavigate();

    function handleSetImage(event) {
        const file = event.target.files[0];
        setImageFile(file)
    }

    function handleAddIngredient() {
        setIngredients(prevState => [...prevState, newIngredient]);
        setNewIngredient("");
    }

    function handleRemoveIngredient(deleted) {
        setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted));
    }

    async function handleAddDish() {
        if(!name || !categorie || !price  || !description) {
            return alert("Preencha todos os campos antes de adcionar prato.")
        }

        if(newIngredient) {
            return alert("Você deixou um ingrediente no campo para adiconar. Clique para adcionar ou deixe o campo vazio.")
        }

        const dish = {
            name,
            categorie,
            price,
            description,
            ingredients
        }

        await addDish({ dish, imageFile })

        navigate("/");
    }


    return (
        <Container>
            <Navbar />

            <main>
                <Content>
                    <Link to="/">
                        <ButtonText 
                            className="back"
                            icon={<svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7071 0.293122C12.0976 0.683646 12.0976 1.31681 11.7071 1.70734L2.41421 11.0002L11.7071 20.2931C12.0976 20.6836 12.0976 21.3168 11.7071 21.7073C11.3166 22.0979 10.6834 22.0979 10.2929 21.7073L0.292893 11.7073C-0.0976311 11.3168 -0.0976311 10.6836 0.292893 10.2931L10.2929 0.293122C10.6834 -0.0974022 11.3166 -0.0974022 11.7071 0.293122Z" fill="white"/>
                                </svg>} title="voltar" 
                        />
                    </Link>

                    <h1>Editar prato</h1>

                    <p>Imagem do prato</p>
                    <label htmlFor="image"><div className="image-button"><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2929 1.21697C11.6834 0.826441 12.3166 0.826441 12.7071 1.21697L17.9571 6.46697C18.3476 6.85749 18.3476 7.49065 17.9571 7.88118C17.5666 8.2717 16.9334 8.2717 16.5429 7.88118L12 3.33829L7.45711 7.88118C7.06658 8.2717 6.43342 8.2717 6.04289 7.88118C5.65237 7.49065 5.65237 6.85749 6.04289 6.46697L11.2929 1.21697Z" fill="white"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0.924072C12.5523 0.924072 13 1.37179 13 1.92407V15.9241C13 16.4764 12.5523 16.9241 12 16.9241C11.4477 16.9241 11 16.4764 11 15.9241V1.92407C11 1.37179 11.4477 0.924072 12 0.924072Z" fill="white"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1 14.9241C1.55228 14.9241 2 15.3718 2 15.9241V22.9241H22V15.9241C22 15.3718 22.4477 14.9241 23 14.9241C23.5523 14.9241 24 15.3718 24 15.9241V22.9241C24 23.4545 23.7893 23.9632 23.4142 24.3383C23.0391 24.7134 22.5304 24.9241 22 24.9241H2C1.46957 24.9241 0.960861 24.7134 0.585787 24.3383C0.210714 23.9632 0 23.4545 0 22.9241V15.9241C0 15.3718 0.447715 14.9241 1 14.9241Z" fill="white"/>
                            </svg> <p>Selecione imagem</p></div></label>
                    <input
                        id="image"
                        type="file"
                        className="photo"
                        onChange={handleSetImage}
                    />

                    <p>Nome</p>
                    <Input
                        type="text"
                        placeholder="Ex: Salada Ceasar"
                        onChange={e => setName(e.target.value)}
                    />

                    <p>Categoria</p>
                    <select
                        onChange={e => setCategorie(e.target.value)}
                    >
                        <option value="">Selecionar</option>
                        <option value="starter">Entrada</option>
                        <option value="main">Prato Principal</option>
                        <option value="desert">Sobremesa</option>
                    </select>

                    <p>Ingredients</p>
                    <div className="ingredients">
                        {
                            ingredients.map((ingredient, index) => (
                                <Ingredients
                                    key={String(index)}
                                    value={ingredient}
                                    onClick={() => handleRemoveIngredient(ingredient)}
                                />
                            ))
                        }

                        <Ingredients 
                            isNew
                            placeholder="Adcionar"
                            value={newIngredient}
                            onChange={e => setNewIngredient(e.target.value)}
                            onClick={handleAddIngredient}
                        />
                        
                    </div>

                    <p>Preço</p>
                    <Input
                        type="text"
                        placeholder="R$ 00,00"
                        onChange={e => setPrice(e.target.value)}
                    />
                    
                    <p>Descrição</p>
                    <Textarea
                        placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                        onChange={e => setDescription(e.target.value)}
                    />

                    <Button 
                        className="save" 
                        title="Salvar alterações" 
                        onClick={handleAddDish}
                    />

                </Content>
            </main>

            <Footer />

        </Container>
    )
}