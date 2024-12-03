import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";
import {Slider} from "../../../components/slider/Slider";
import {theme} from "../../../styles/Theme";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <Icon iconID={'quotation-marks'}/>
            <Slider/>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    min-height: 100vh;
    background-color: ${theme.colors.primaryBackground};
`