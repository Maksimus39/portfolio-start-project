import React from 'react';
import styled from "styled-components";

export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Contact Me</a></li>
            </ul>

        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        flex-direction: row;
        gap: 30px;
        list-style: none; /* Убираем маркеры списка */
    }

    li a {
        color: rgba(255, 255, 255, 1);
        text-decoration: none;
    }

`

