import { Container, Content } from "./styles";

import { Navbar } from "../../components/Navbar";
import { ButtonText } from "../../components/ButtonText";
import { DishImage } from "../../components/DishImage";
import { Tag } from "../../components/Tag";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button"

import salada_ravanello from "../../assets/dishes/salada_ravanello.png"

export function Dish() {
  return(
    <Container>
      <Navbar />

      <main>
        <Content>

            <ButtonText 
              icon={<svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7071 0.293122C12.0976 0.683646 12.0976 1.31681 11.7071 1.70734L2.41421 11.0002L11.7071 20.2931C12.0976 20.6836 12.0976 21.3168 11.7071 21.7073C11.3166 22.0979 10.6834 22.0979 10.2929 21.7073L0.292893 11.7073C-0.0976311 11.3168 -0.0976311 10.6836 0.292893 10.2931L10.2929 0.293122C10.6834 -0.0974022 11.3166 -0.0974022 11.7071 0.293122Z" fill="white"/>
                </svg>} title="voltar" 
            />
            
            <DishImage 
              source={salada_ravanello}
              alt="Salada Caprese"
              description="Salada Ravanello"
            />

            <p className="description">Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>

            <div className="tags">
              <Tag title="alface" />
              <Tag title="cebola" />
              <Tag title="pão naan" />
              <Tag title="pepino" />
              <Tag title="rabanete" />
              <Tag title="tomate" />
            </div>

            <div className="order">
              <svg width="18" height="2" viewBox="0 0 18 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.00023C0 0.447944 0.335786 0.000228882 0.75 0.000228882H17.25C17.6642 0.000228882 18 0.447944 18 1.00023C18 1.55251 17.6642 2.00023 17.25 2.00023H0.75C0.335786 2.00023 0 1.55251 0 1.00023Z" fill="white"/>
              </svg>
              <p>01</p>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 9.00023C0 8.58602 0.335786 8.25023 0.75 8.25023H17.25C17.6642 8.25023 18 8.58602 18 9.00023C18 9.41444 17.6642 9.75023 17.25 9.75023H0.75C0.335786 9.75023 0 9.41444 0 9.00023Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9 0.000228882C9.41421 0.000228882 9.75 0.336015 9.75 0.750229V17.2502C9.75 17.6644 9.41421 18.0002 9 18.0002C8.58579 18.0002 8.25 17.6644 8.25 17.2502V0.750229C8.25 0.336015 8.58579 0.000228882 9 0.000228882Z" fill="white"/>
              </svg>
              <Button 
                icon={
                  <svg width="27" height="23" viewBox="0 0 27 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.96118 8.36639C5.96118 7.81411 6.4089 7.36639 6.96118 7.36639H19.9612C20.5135 7.36639 20.9612 7.81411 20.9612 8.36639C20.9612 8.91868 20.5135 9.36639 19.9612 9.36639H6.96118C6.4089 9.36639 5.96118 8.91868 5.96118 8.36639Z" fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.96118 12.3664C5.96118 11.8141 6.4089 11.3664 6.96118 11.3664H19.9612C20.5135 11.3664 20.9612 11.8141 20.9612 12.3664C20.9612 12.9187 20.5135 13.3664 19.9612 13.3664H6.96118C6.4089 13.3664 5.96118 12.9187 5.96118 12.3664Z" fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.04697 0.952181C1.42204 0.577108 1.93075 0.366394 2.46118 0.366394H24.4612C24.9916 0.366394 25.5003 0.577108 25.8754 0.952181C26.2505 1.32725 26.4612 1.83596 26.4612 2.36639V21.3664C26.4612 21.713 26.2817 22.0348 25.9869 22.217C25.6921 22.3993 25.324 22.4158 25.014 22.2608L21.4612 20.4844L17.9084 22.2608C17.6269 22.4016 17.2955 22.4016 17.014 22.2608L13.4612 20.4844L9.90839 22.2608C9.62687 22.4016 9.29549 22.4016 9.01397 22.2608L5.46118 20.4844L1.9084 22.2608C1.59841 22.4158 1.23027 22.3993 0.93545 22.217C0.640634 22.0348 0.461182 21.713 0.461182 21.3664V2.36639C0.461182 1.83596 0.671896 1.32725 1.04697 0.952181ZM24.4612 2.36639L2.46118 2.36639L2.46118 19.7484L5.01397 18.472C5.2955 18.3312 5.62687 18.3312 5.90839 18.472L9.46118 20.2484L13.014 18.472C13.2955 18.3312 13.6269 18.3312 13.9084 18.472L17.4612 20.2484L21.014 18.472C21.2955 18.3312 21.6269 18.3312 21.9084 18.472L24.4612 19.7484V2.36639Z" fill="white"/>
                  </svg>
                }
                title={"pedir ∙ R$ 25,00"}
              />
            </div>

          </Content>
        </main>  

      <Footer />

    </Container>
  )
}