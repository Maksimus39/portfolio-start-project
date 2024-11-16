import React from 'react';
import styled from "styled-components";

export const Send = () => {
    return (
        <StylesSend>
            Send
        </StylesSend>
    );
};

const StylesSend = styled.a`
    font-family: 'Poppins', sans-serif; /* Указываем шрифт Poppins */
    font-size: 30px; /* Размер шрифта 30 пикселей */
    font-weight: 500; /* Жирность шрифта 500 (medium) */
    line-height: 36px; /* Высота строки 36 пикселей */
    text-align: left; /* Выравнивание текста по левому краю */
    text-underline-position: from-font; /* Позиция подчеркивания относительно шрифта */
    text-decoration-skip-ink: none ;
    color: rgba(103, 108, 219, 1);
`
