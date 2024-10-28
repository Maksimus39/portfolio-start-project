import React from 'react';
import icnonsSprite from '../../assets/images/icons-sprite.svg'


type Props = {
    iconID: string
    width?: string
    height?: string
    viewBox?: string
}
export const Icon = ({iconID, width, height, viewBox}: Props) => {
    return (
        <svg width={width || "100"}
             height={height || "100"}
             viewBox={viewBox || "0 0 100 100"}
             fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${icnonsSprite}#${iconID}`}/>
        </svg>
    );
};

