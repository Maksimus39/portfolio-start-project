import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";
import {Text} from "../../../components/slider/Slider";
import {Send} from "../../../components/send/Send";
import {theme} from "../../../styles/Theme";

export const Contact = () => {
    return (
        <StyledContact>
            <StyledMyContact>Let’s Connect</StyledMyContact>
            <Icon iconID={'git-hub'}/>
            <Icon iconID={'whatSap'}/>

            <StyledMyForm>
                <Text>Your name:</Text>
                <Field/>

                <Text>Your email address:</Text>
                <Field/>

                <Text>Tell about the project:</Text>
                <Field/>
            </StyledMyForm>

            <Send/>
            <Icon iconID={'arrow-right'}/> // листать
        </StyledContact>
    );
};

const StyledContact = styled.section`
    background-color: ${theme.colors.secondaryBackground};
    min-height: 100vh;
`

const StyledMyContact = styled.div`
    font-family: 'Poppins', sans-serif;
    font-size: 100px;
    font-weight: 700;
    line-height: 120px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: ${theme.colors.fontColor};
`

const StyledMyForm = styled.form`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`


const Field = styled.input`

`




