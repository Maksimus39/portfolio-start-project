import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";

type Props = {
    iconID: string
    skillTitle: string
}
export const Skill = ({iconID, skillTitle}: Props) => {
    return (
        <StyledSkill>
            <Icon iconID={iconID}/>
            <SkillTitle>{skillTitle}</SkillTitle>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    width: 33%;
`
const SkillTitle = styled.h3`
    color: rgba(255, 255, 255, 1);
`
