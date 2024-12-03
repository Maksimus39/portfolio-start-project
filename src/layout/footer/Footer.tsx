import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";

export const Footer = () => {
    return (
        <StyledFooter>
            <StyledGreeting>Created by
                <StyledName> Maxim </StyledName>
                | All Reserved!</StyledGreeting>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: ${theme.colors.secondaryBackground};
    min-height: 20vh;
`

const StyledGreeting = styled.p`
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 20px;
    line-height: 36px;
    letter-spacing: 0.3px;
    text-align: center;
    color: ${theme.colors.blockColor};
`

const StyledName = styled.small`
    color:${theme.colors.fontColor};
    font-family: 'Poppins', sans-serif; 
    font-weight: 700; 
    font-size: 20px; 
    line-height: 36px; 
    letter-spacing: 0.3px; 
    text-align: center; 
`