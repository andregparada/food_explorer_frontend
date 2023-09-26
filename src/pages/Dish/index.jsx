import { Container, Content } from "./styles";

import { Navbar } from "../../components/Navbar";
import { ButtonText } from "../../components/ButtonText";
import { DishImage } from "../../components/DishImage";
import { Tag } from "../../components/Tag";
import { Footer } from "../../components/Footer";

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
              source="src\assets\dishes\image 2.png"
              alt="Salada Caprese"
              description="Salada Ravanello"
            />

            <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>

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
            </div>

          </Content>
        </main>  

      <Footer />

    </Container>
  )
}