import React from "react";
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";
import {Icon} from "../../../../components/icon/Icon";

type Props = {
    iconID: string;
    skillTitle: string;
};

export const Skill = ({iconID, skillTitle}: Props) => {
    return (
        <StyledSkill>
            <Icon iconID={iconID} />
            <SkillTitle>{skillTitle}</SkillTitle>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    width: 33%;
`;

const SkillTitle = styled.h3`
    color: ${theme.colors.fontColor};
`;
