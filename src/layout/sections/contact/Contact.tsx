import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";
import {Text} from "../../../components/slider/Slider";
import {Send} from "../../../components/send/Send";

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
    background-color: rgba(0, 0, 0, 1);
    min-height: 100vh;
`

const StyledMyContact = styled.div`
    font-family: 'Poppins', sans-serif; /* Указываем шрифт Poppins */
    font-size: 100px; /* Размер шрифта 100 пикселей */
    font-weight: 700; /* Жирность шрифта 700 (bold) */
    line-height: 120px; /* Высота строки 120 пикселей */
    text-align: left; /* Выравнивание текста по левому краю */
    text-underline-position: from-font; /* Позиция подчеркивания относительно шрифта */
    text-decoration-skip-ink: none;
    color: rgba(255, 255, 255, 1);
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




