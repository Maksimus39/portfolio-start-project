import React from "react";
import styled from "styled-components";
import {theme} from "../../styles/Theme";


export const ContactMe = () => {
    return (
        <StyledMenu>
            <ul>
                <li><a href="">Contact Me</a></li>
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    display: flex;
    align-items: center;
    flex-direction: row;
    padding: 0 20px;
    width: 157px;
    height: 50px;
    background: ${theme.colors.accentColor};
    justify-content: center;

    ul {
        display: flex;
        flex-direction: row;
        gap: 30px;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    li a {
        color: ${theme.colors.fontColor};
    }
`