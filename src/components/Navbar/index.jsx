import { AiOutlineMenu } from 'react-icons/ai'
import { Container, Logo } from "./styles";

export function Navbar() {
    return(
        <Container>
            <svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.36639C0 0.814109 0.447715 0.366394 1 0.366394H23C23.5523 0.366394 24 0.814109 24 1.36639C24 1.91868 23.5523 2.36639 23 2.36639H1C0.447715 2.36639 0 1.91868 0 1.36639ZM0 9.36639C0 8.81411 0.447715 8.36639 1 8.36639H23C23.5523 8.36639 24 8.81411 24 9.36639C24 9.91868 23.5523 10.3664 23 10.3664H1C0.447715 10.3664 0 9.91868 0 9.36639ZM0 17.3664C0 16.8141 0.447715 16.3664 1 16.3664H23C23.5523 16.3664 24 16.8141 24 17.3664C24 17.9187 23.5523 18.3664 23 18.3664H1C0.447715 18.3664 0 17.9187 0 17.3664Z" fill="white"/>
            </svg>

            <Logo>
                <svg width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.2306 0.366394L21.8884 6.51966V18.8262L11.2306 24.9795L0.572836 18.8262V6.51966L11.2306 0.366394Z" fill="#065E7C"/>
                </svg>
                <h2>food explorer</h2>
            </Logo>

            <div>
                <svg width="27" height="23" viewBox="0 0 27 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.96118 8.36639C5.96118 7.81411 6.4089 7.36639 6.96118 7.36639H19.9612C20.5135 7.36639 20.9612 7.81411 20.9612 8.36639C20.9612 8.91868 20.5135 9.36639 19.9612 9.36639H6.96118C6.4089 9.36639 5.96118 8.91868 5.96118 8.36639Z" fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.96118 12.3664C5.96118 11.8141 6.4089 11.3664 6.96118 11.3664H19.9612C20.5135 11.3664 20.9612 11.8141 20.9612 12.3664C20.9612 12.9187 20.5135 13.3664 19.9612 13.3664H6.96118C6.4089 13.3664 5.96118 12.9187 5.96118 12.3664Z" fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.04697 0.952181C1.42204 0.577108 1.93075 0.366394 2.46118 0.366394H24.4612C24.9916 0.366394 25.5003 0.577108 25.8754 0.952181C26.2505 1.32725 26.4612 1.83596 26.4612 2.36639V21.3664C26.4612 21.713 26.2817 22.0348 25.9869 22.217C25.6921 22.3993 25.324 22.4158 25.014 22.2608L21.4612 20.4844L17.9084 22.2608C17.6269 22.4016 17.2955 22.4016 17.014 22.2608L13.4612 20.4844L9.90839 22.2608C9.62687 22.4016 9.29549 22.4016 9.01397 22.2608L5.46118 20.4844L1.9084 22.2608C1.59841 22.4158 1.23027 22.3993 0.93545 22.217C0.640634 22.0348 0.461182 21.713 0.461182 21.3664V2.36639C0.461182 1.83596 0.671896 1.32725 1.04697 0.952181ZM24.4612 2.36639L2.46118 2.36639L2.46118 19.7484L5.01397 18.472C5.2955 18.3312 5.62687 18.3312 5.90839 18.472L9.46118 20.2484L13.014 18.472C13.2955 18.3312 13.6269 18.3312 13.9084 18.472L17.4612 20.2484L21.014 18.472C21.2955 18.3312 21.6269 18.3312 21.9084 18.472L24.4612 19.7484V2.36639Z" fill="white"/>
                </svg>
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.000244141" y="0.366394" width="20" height="20" rx="10" fill="#92000E"/>
                    <path d="M6.35587 10.1304C6.35587 8.51573 6.62654 7.25573 7.16787 6.35039C7.71854 5.43573 8.6612 4.97839 9.99587 4.97839C11.3305 4.97839 12.2685 5.43573 12.8099 6.35039C13.3605 7.25573 13.6359 8.51573 13.6359 10.1304C13.6359 11.7637 13.3605 13.0424 12.8099 13.9664C12.2685 14.8811 11.3305 15.3384 9.99587 15.3384C8.6612 15.3384 7.71854 14.8811 7.16787 13.9664C6.62654 13.0424 6.35587 11.7637 6.35587 10.1304ZM12.0679 10.1304C12.0679 9.37439 12.0165 8.73506 11.9139 8.21239C11.8205 7.68973 11.6245 7.26506 11.3259 6.93839C11.0272 6.60239 10.5839 6.43439 9.99587 6.43439C9.40787 6.43439 8.96454 6.60239 8.66587 6.93839C8.3672 7.26506 8.16654 7.68973 8.06387 8.21239C7.97054 8.73506 7.92387 9.37439 7.92387 10.1304C7.92387 10.9144 7.97054 11.5724 8.06387 12.1044C8.1572 12.6364 8.3532 13.0657 8.65187 13.3924C8.95987 13.7191 9.40787 13.8824 9.99587 13.8824C10.5839 13.8824 11.0272 13.7191 11.3259 13.3924C11.6339 13.0657 11.8345 12.6364 11.9279 12.1044C12.0212 11.5724 12.0679 10.9144 12.0679 10.1304Z" fill="white"/>
                </svg>
            </div>

        </Container>
    )
}