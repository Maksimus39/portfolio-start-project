import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Skill} from "./skill/Skill";
import {theme} from "../../../styles/Theme";
import {Container} from "../../../components/Container";

const iconID = ['reactSVG', 'Redux-Toolkit', 'JS', 'TS', 'HTML5', 'CSS', 'styled-component', 'materialUI', 'git']
const skillTitle = ['React', 'Redux-Toolkit', 'Java-Script', 'Type-Script', 'HTML 5', 'CSS', 'Styled component', 'materialUI', 'Git']


export const Skills = () => {
    return (
        <StyledSkills>

            <Container>
                <FlexWrapper direction={'space-between'} align={'center'}>
                    {iconID.map((id, index) => (
                        <Skill key={index} iconID={id} skillTitle={skillTitle[index]}/>
                    ))}
                </FlexWrapper>
            </Container>

        </StyledSkills>
    )
}

const StyledSkills = styled.section`
    background-color: ${theme.colors.secondaryBackground};
    min-height: 200px;
    
    
    display: flex;
    flex-direction: column;
    align-items: center;
`

