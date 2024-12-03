import React from 'react';
import portfolioImg from '../../../assets/images/portfolio_1.webp'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import {theme} from "../../../styles/Theme";


export const Main = () => {
    return (
        <StyledMain>

            <FlexWrapper align={'center'} justify={'space-around'}>

                <ColorText>
                    <span>Hello!</span>
                    <h2>I’m Maxim Minakov</h2>
                    <h1>I am a react developer from Russia who likes to create interesting and complex projects</h1>
                </ColorText>
                <Photo src={portfolioImg} alt="myPhoto"/>
            </FlexWrapper>

            <Button>
                <Icon iconID={'EmailMe'}/>
                Email me
            </Button>

            <Icon iconID={'downloadCV'}/>
            <LinkStyle
                href="">Download CV
            </LinkStyle>
        </StyledMain>
    );
};
const StyledMain = styled.div`
    min-height: 100vh;
    background-color: ${theme.colors.primaryBackground};
`
const Photo = styled.img`
    width: 721px;
    height: 743px;
    object-fit: cover;
`
const ColorText = styled.h2`
    color: ${theme.colors.fontColor};
`

const Button = styled.button`
    width: 203px;
    height: 64px;
    padding: 20px 40px;
    background-color: ${theme.colors.accentColor};
    border: none;

    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: ${theme.colors.fontColor};

`

const LinkStyle = styled.a`
    width: 136px;
    height: 24px;

    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: ${theme.colors.fontColor};
    margin-left: 10px;
`