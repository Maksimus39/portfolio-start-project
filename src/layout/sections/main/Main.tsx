import React from 'react';
import portfolioImg from '../../../assets/images/portfolio_1.webp'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import {theme} from "../../../styles/Theme";
import {Container} from "../../../components/Container";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={'center'} justify={'space-between'}>
                    <TextWrapper>

                        <ColorText>
                            <SmallText>Hello!</SmallText>
                            <Name>I’m Maxim Minakov</Name>
                            <MainTitle>I am a react developer from Russia who likes to create interesting and complex
                                projects.</MainTitle>
                        </ColorText>


                    </TextWrapper>
                    <Photo src={portfolioImg} alt="myPhoto"/>
                </FlexWrapper>

                <FlexWrapper align={'center'} justify={'space-between'}>
                    <Link>
                        <IconWrapper>
                            <Icon iconID={'EmailMe'}/>
                        </IconWrapper>
                        <span>Email me</span>
                    </Link>

                    <ComponentCV>
                        <IconWrapper>
                            <Icon iconID={'downloadCV'}/>
                        </IconWrapper>
                        <LinkStyle href="">Download CV</LinkStyle>
                    </ComponentCV>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.div`
    min-height: 100vh;
    background-color: ${theme.colors.primaryBackground};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Photo = styled.img`
    width: 50%;
    height: 743px;
    object-fit: cover;
`;

const TextWrapper = styled.div`
    position: relative;
    z-index: 1;
`;

const ColorText = styled.div`
    color: ${theme.colors.fontColor};

    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
`;

const SmallText = styled.h2`
    font-size: 90px;
    font-weight: 700;
    line-height: 108px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    margin: 5px 0;
`;

const IconWrapper = styled.div`
    width: 24px;
    height: 24px;
    margin-right: 10px;
`;

const Link = styled.button`
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

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    white-space: nowrap;

    margin-right: auto;
`;

const ComponentCV = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    margin-right: auto;
    transform: translateX(-300px);
`;

const LinkStyle = styled.a`
    width: 136px;
    height: 24px;

    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: ${theme.colors.fontColor};
    margin-left: 10px;
`;

const Name = styled.h2`
    font-size: 90px;
    font-weight: 700;
    line-height: 108px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    white-space: nowrap;
    margin: 5px 0;

`;

const MainTitle = styled.h1`
    font-size: 20px;
    font-weight: 400;
    line-height: 36px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    margin: 5px 0;
`;