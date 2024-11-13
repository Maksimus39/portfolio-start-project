import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";


export const Works = () => {
    return (
        <StyledTestimony>
            <SectionTitle>
                Developer and Designer, specialized in
                UI/UX and Web Developer
            </SectionTitle>

            <ExperienceDevelopment>4 +</ExperienceDevelopment>

            <SectionParagraph>
                Years
                Experience
                Working
            </SectionParagraph>

            <Specialization>

                <SectionBlock>
                    <SectionTitle>Front End Developer</SectionTitle>
                    <Icon iconID={'computer'}/>
                </SectionBlock>


                <SectionBlock2>
                    <SectionTitle>UI/UX Designer</SectionTitle>
                    <Icon iconID={'paint'}/>
                </SectionBlock2>


                <SectionBlock2>
                    <SectionTitle>Branding Designer</SectionTitle>
                    <Icon iconID={'thunder'}/>
                </SectionBlock2>

            </Specialization>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    background-color: rgba(34, 42, 54, 1);
    min-height: 100vh;
`
const SectionTitle = styled.h2`
    text-align: center;
    color: rgba(255, 255, 255, 1)
`
const ExperienceDevelopment = styled.h2`
    width: 133px;
    height: 120px;
    color: rgba(103, 108, 219, 1);
`
const SectionParagraph = styled.h2`
    width: 207px;
    height: 216px;
    color: rgba(255, 255, 255, 1);
`
const Specialization = styled.section`
    display: flex;
    gap: 10px;
`

const SectionBlock = styled.div`
    width: 288px;
    height: 295px;
    background: rgba(103, 108, 219, 1);
`
const SectionBlock2 = styled.div`
    width: 288px;
    height: 295px;
    background: rgba(196, 196, 196, 1);
`
