import { AiOutlineMinus } from 'react-icons/ai'
import { Container } from "./styles";

import { Navbar } from "../../components/Navbar";
import { ButtonText } from "../../components/ButtonText";
import { DishImage } from "../../components/DishImage";
import { Tag } from "../../components/Tag";

export function Dish() {
  return(
    <Container>
      <Navbar />

      <ButtonText icon={<svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.7071 0.293122C12.0976 0.683646 12.0976 1.31681 11.7071 1.70734L2.41421 11.0002L11.7071 20.2931C12.0976 20.6836 12.0976 21.3168 11.7071 21.7073C11.3166 22.0979 10.6834 22.0979 10.2929 21.7073L0.292893 11.7073C-0.0976311 11.3168 -0.0976311 10.6836 0.292893 10.2931L10.2929 0.293122C10.6834 -0.0974022 11.3166 -0.0974022 11.7071 0.293122Z" fill="white"/>
</svg>} title="voltar" />
      
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
        <AiOutlineMinus />
      </div>
      <Tag />

    </Container>
  )
}