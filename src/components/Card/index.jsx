import { Container } from "./styles";

import { Button } from "../Button";


export function Card({ source, alt, name, price }) {
    return(
        <Container>
          
            <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.6997 22.704L23.0754 12.478C25.3788 9.95304 25.7145 5.82477 23.5384 3.18621C22.9926 2.52129 22.3283 1.9847 21.586 1.60925C20.8437 1.23379 20.0391 1.02735 19.2211 1.00254C18.4032 0.977725 17.5893 1.13506 16.829 1.46493C16.0687 1.7948 15.3781 2.29028 14.7993 2.9211L13.0399 4.85267L11.5236 3.18621C9.2086 0.673905 5.4236 0.30779 3.00443 2.68123C2.39479 3.27646 1.90282 4.00102 1.55859 4.81063C1.21435 5.62024 1.02508 6.4979 1.00233 7.38999C0.979577 8.28208 1.12383 9.16986 1.42627 9.99908C1.72872 10.8283 2.183 11.5816 2.76136 12.2129L12.3801 22.704C12.5557 22.8936 12.7928 23 13.0399 23C13.287 23 13.5241 22.8936 13.6997 22.704V22.704Z" stroke="#E1E1E6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <img src={source} alt={alt} />

            <p>{name}</p>

            <span>{price}</span>

            <div className="add-button">
              <svg width="18" height="2" viewBox="0 0 18 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.00023C0 0.447944 0.335786 0.000228882 0.75 0.000228882H17.25C17.6642 0.000228882 18 0.447944 18 1.00023C18 1.55251 17.6642 2.00023 17.25 2.00023H0.75C0.335786 2.00023 0 1.55251 0 1.00023Z" fill="white"/>
              </svg>
              <p>01</p>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 9.00023C0 8.58602 0.335786 8.25023 0.75 8.25023H17.25C17.6642 8.25023 18 8.58602 18 9.00023C18 9.41444 17.6642 9.75023 17.25 9.75023H0.75C0.335786 9.75023 0 9.41444 0 9.00023Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9 0.000228882C9.41421 0.000228882 9.75 0.336015 9.75 0.750229V17.2502C9.75 17.6644 9.41421 18.0002 9 18.0002C8.58579 18.0002 8.25 17.6644 8.25 17.2502V0.750229C8.25 0.336015 8.58579 0.000228882 9 0.000228882Z" fill="white"/>
              </svg>
            </div>

            <Button title="incluir"/>

        </Container>
    );
}