import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";

export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Services</a></li>
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    display: flex;
    align-items: center;
    flex-direction: row;
    padding: 0 20px;
    height: 60px;

    ul {
        display: flex;
        flex-direction: row;
        gap: 30px;
        list-style: none;
        margin: 0;
        padding: 0;
        justify-content: center;
        align-items: center;
    }

    li a {
        color: ${theme.colors.fontColor}
    }
`