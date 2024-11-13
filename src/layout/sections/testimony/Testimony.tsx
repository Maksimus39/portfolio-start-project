import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";
import {Slider} from "../../../components/slider/Slider";

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
    background-color: rgba(34, 42, 54, 0.95);
`