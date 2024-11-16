import React from 'react';
import styled from "styled-components";
import clientImg from '../../assets/images/clientImg.webp'
import {WorkProgress} from "../workProgress/WorkProgress";
import {FlexWrapper} from "../FlexWrapper";


export const Slider = () => {
    return (
        <StyledSlider>

            <FlexWrapper>
                <Slide>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a,
                        mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                        interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class
                        aptent taciti sociosqu ad litora torquent
                    </Text>

                    <Img src={clientImg} alt='clientImg'/>
                    <Pagination>
                        <span></span>
                        <span></span>
                        <span></span>
                    </Pagination>

                    <WorkProgress/>
                </Slide>
            </FlexWrapper>

        </StyledSlider>
    );
};

const StyledSlider = styled.div`
    max-width: 1200px;
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Slide = styled.div`

`

export const Text = styled.div`
    color: rgba(255, 255, 255, 1);
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 20px;
    line-height: 36px;
`

const Img = styled.img`
    width: 389px;
    height: 391px;
    opacity: 80%;
`

const Pagination = styled.span`
    span {
        display: inline-block;
        width: 10px;
        height: 10px;
        margin: 5px;
        background-color: azure;
    }
`



