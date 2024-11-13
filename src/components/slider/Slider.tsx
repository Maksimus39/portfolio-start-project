import React from 'react';
import styled from "styled-components";
import clientImg from '../../assets/images/clientImg.webp'
import {WorkProgress} from "../workProgress/WorkProgress";


export const Slider = () => {
    return (
        <StyledSlider>
            <Slide>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a,
                    mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                    interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class
                    aptent taciti sociosqu ad litora torquent
                </Text>

                <Img src={clientImg} alt='clientImg'/>

                <WorkProgress/>
            </Slide>


        </StyledSlider>
    );
};

const StyledSlider = styled.div`
    max-width: 1200px;
    border: 1px solid red;
`

const Slide = styled.div`
    
`

const Text = styled.div`
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



