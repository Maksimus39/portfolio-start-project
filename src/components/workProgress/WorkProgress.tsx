import React from 'react';
import styled from "styled-components";

export const WorkProgress = () => {
    return (
        <StyledWorkProgress>
            <PositiveResponses>Satisfaction Clients</PositiveResponses>
            <Percentages>100 %</Percentages>

            <PositiveResponses>Clients On Worldwide</PositiveResponses>
            <Percentages>+ 80</Percentages>

            <PositiveResponses>Projects Done</PositiveResponses>
            <Percentages>743</Percentages>
        </StyledWorkProgress>
    );
};

const StyledWorkProgress = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const PositiveResponses = styled.span`
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    font-size: 30px;
    line-height: 36px;
    color: rgba(255, 255, 255, 1);
`
const Percentages = styled.span`
    color: rgba(103, 108, 219, 1);
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    font-size: 50px;
    line-height: 60px;
`
