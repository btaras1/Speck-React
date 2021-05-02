import styled from 'styled-components';
import {
    colors,
    breakpoints,
    transitionCubic,
    boxShadow,
    boxShadowHover
} from '../../lib/style/theme';

export const EventInfo = styled.div`
        @media screen and (${breakpoints.tablet}) {
        display: flex;
        justify-content: space-between;
        }
`;
export const Figure = styled.figure`
        width: 100%;
        height: 230px;
        margin-bottom: 24px;
        @media screen and (${breakpoints.mobileLarge}) {
                height: 300px;
            
        }
        @media screen and (${breakpoints.tablet}) {
            width: 400px;
            height: 230px;
        }
        @media screen and (${breakpoints.desktop}) {
                width: 400px;
                height: 230px;
        }
        @media screen and (${breakpoints.desktopLarge}) {
                width: 800px;
                height: 450px;
        }
`;
export const Image = styled.img`
        width: 100%;
        height: 100%;
        object-fit: cover;
`;
export const Content = styled.div`
        margin-bottom: 15px;
        @media screen and (${breakpoints.tablet}) {
            width: 270px;
            margin-bottom: 0;
        }
        @media screen and (${breakpoints.desktop}) {
            width: 270px;
        }
        @media screen and (${breakpoints.desktopLarge}) {
            width: 400px;           
        }
`;
export const Row = styled.div`
        display: flex;
        justify-content: space-between;
        margin-bottom: 16px;
        @media screen and (${breakpoints.tablet}) {
            display: flex;
            justify-content: space-between;
            margin-bottom: 16px;
        }
        @media screen and (${breakpoints.desktop}) {
            margin-bottom: 32px;           
        }
`;
export const Item = styled.div`
    &:last-child {
        text-align: right;
    }
`;
export const Title = styled.h3`
        font-size: 14px;
        margin-bottom: 4px;
`;
export const Value = styled.p`
    font-size: 14px;
`;
export const Description = styled.p`
        font-size: 14px;
        line-height: 150%;
        @media screen and (${breakpoints.tablet}) {
            width: 400px;
        }
        @media screen and (${breakpoints.desktop}) {
            width: 400px;            
        }
        @media screen and (${breakpoints.desktopLarge}) {
            width: 800px;
        }
`;