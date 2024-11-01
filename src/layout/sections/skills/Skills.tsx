import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <StyledSkills >
            <SectionTitle>My skills</SectionTitle>
            <FlexWrapper justify={'space-between'}>
                <Skill iconID={'reactSVG'} skillTitle={'React'}/>
                <Skill iconID={'Redux-Toolkit'} skillTitle={'Redux-Toolkit'}/>
                <Skill iconID={'JS'} skillTitle={'Java-Script'}/>
                <Skill iconID={'TS'} skillTitle={'Type-Script'}/>
                <Skill iconID={'HTML5'} skillTitle={'HTML 5 '}/>
                <Skill iconID={'CSS'} skillTitle={'CSS'}/>
                <Skill iconID={'styled-component'} skillTitle={'Styled component'}/>
                <Skill iconID={'materialUI'} skillTitle={'materialUI'}/>
                <Skill iconID={'git'} skillTitle={'Git'}/>
            </FlexWrapper>
        </StyledSkills>
    )
}

const StyledSkills = styled.section`
    background-color: rgba(0, 0, 0, 1);
    min-height: 100vh;
    
`

