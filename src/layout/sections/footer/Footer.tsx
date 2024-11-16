import React from 'react';
import styled from "styled-components";

export const Footer = () => {
    return (
        <StyledFooter>
            <StyledGreeting>Created by
                <StyledName> Maxim </StyledName>
                | All Reserved!</StyledGreeting>
        </StyledFooter>
    );
};

const StyledFooter = styled.div`
    background-color: rgba(0, 0, 0, 1);
    min-height: 100vh;
`

const StyledGreeting = styled.p`
    font-family: 'Poppins', sans-serif; /* Указываем шрифт Poppins */
    font-weight: 500; /* Жирность шрифта 500 (medium) */
    font-size: 20px; /* Размер шрифта 20 пикселей */
    line-height: 36px; /* Высота строки 36 пикселей */
    letter-spacing: 0.3px; /* Межбуквенное расстояние 0.3 пикселя */
    text-align: center; /* Выравнивание текста по центру */
    color: rgba(255, 255, 255, 0.5);
`

const StyledName = styled.span`
    color: rgba(255, 255, 255, 1);
    font-family: 'Poppins', sans-serif; /* Указываем шрифт Poppins */
    font-weight: 700; /* Жирность шрифта 700 (bold) */
    font-size: 20px; /* Размер шрифта 20 пикселей */
    line-height: 36px; /* Высота строки 36 пикселей */
    letter-spacing: 0.3px; /* Межбуквенное расстояние 0.3 пикселя */
    text-align: center; /* Выравнивание текста по центру */
`