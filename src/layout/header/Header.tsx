import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {ContactMe} from "../../components/contactMe/ContactMe";

export const Header = () => {
    return (
        <StyledHeader>

            <Logo/>
            <Menu/>
            <ContactMe/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: rgba(34, 42, 54, 0.95);
    display: flex;
    justify-content: space-between; /* Равномерно распределяет элементы по ширине контейнера */
    align-items: center; /* Выравнивает элементы по вертикали */
    padding: 0 20px; /* Добавляет отступы слева и справа */
`



 