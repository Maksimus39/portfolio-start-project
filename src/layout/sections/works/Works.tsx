import React from 'react';
import styled from "styled-components";
import {Container} from '../../../components/Container';
import {Icon} from "../../../components/icon/Icon";
import {theme} from "../../../styles/Theme";
import {FlexWrapper} from "../../../components/FlexWrapper";


export const Works = () => {
    return (
        <StyledTestimony>
            <Container>
                <FlexWrapper justify={'space-between'}>
                    <ExperienceSummary>
                        <ExperienceDevelopment>4 +</ExperienceDevelopment>
                        <SectionParagraph>
                            Years Experience Working
                        </SectionParagraph>
                    </ExperienceSummary>



                    <Specializations>
                        <SectionTitle>
                            Developer and Designer, specialized in
                            UI/UX and Web Developer
                        </SectionTitle>

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

                    </Specializations>
                </FlexWrapper>

            </Container>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    background-color: ${theme.colors.primaryBackgroundSolid};
    min-height: 659px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: auto;
`

const ExperienceSummary = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
`
const ExperienceDevelopment = styled.h2`
    width: 133px;
    height: 120px;
    color: ${theme.colors.accentColor};
    font-size: 100px;
    font-weight: 700;
    line-height: 120px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
`
const SectionParagraph = styled.h2`
    width: 207px;
    height: 216px;
    color: ${theme.colors.fontColor};
    font-size: 40px;
    font-weight: 700;
    line-height: 72px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;

`


const Specializations = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`
const SectionTitle = styled.h2`
    text-align: center;
    color: ${theme.colors.fontColor};
    align-items: center;
    display: flex;
`
const Specialization = styled.section`
    display: flex;
    gap: 10px;
`
const SectionBlock = styled.div`
    width: 288px;
    height: 295px;
    background: ${theme.colors.accentColor};
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-start;
`
const SectionBlock2 = styled.div`
    width: 288px;
    height: 295px;
    background: ${theme.colors.blockColor};
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-start;
`
