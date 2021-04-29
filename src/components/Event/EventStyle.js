import styled from 'styled-components';
import {
    colors,
    breakpoints,
    transitionCubic,
    boxShadow,
    boxShadowHover
} from '../../lib/style/theme';

export const Event = styled.div `
    padding: 20px;
    border-radius: 6px;
    box-shadow: ${boxShadow};
    transition: ${transitionCubic};
    &:hover {
        box-shadow: ${boxShadowHover}
    }
`;
export const Figure = styled.figure `
    width: 100%;
    height: 200px;
    margin-bottom: 20px;
    border-radius: 6px;
    overflow: hidden;
`;
export const Image = styled.img `
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
export const Title = styled.h3 `
    font-size: 18px;
    margin-bottom: 10px;    
`;
export const Description = styled.p `
    font-size: 14px;
    margin-bottom: 20px;
`;