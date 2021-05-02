import styled from 'styled-components';
import {
    colors,
    breakpoints
} from '../../lib/style/theme';
import ImageHero from '../../assets/images/hero.jpeg';

export const SectionHero = styled.section`
    background-image: url(${ImageHero});
    height: 400px;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
`;
export const Overlay = styled.div`
        background-color: ${colors.blackOverlay};
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        @media screen and (${breakpoints.mobileLarge}) {
            justify-content: flex-start;
        }
        @media screen and (${breakpoints.desktop}) {
            justify-content: flex-start;
        }
`;
export const Content = styled.div`
        width: 100%;
        padding: 0 15px;
        @media screen and (${breakpoints.mobileLarge}) {
            padding: 0 25px;
        }
        @media screen and (${breakpoints.desktop}) {
            padding: 0 25px;
        }
`;
export const Heading = styled.h1`
        color: ${colors.yellow};
        margin-bottom: 30px;
        font-size: 20px;
        @media screen and (${breakpoints.mobileLarge}) {
            font-size: 24px;
            max-width: 400px;
        }
        @media screen and (${breakpoints.desktop}) {
            font-size: 24px;
            max-width: 400px;
        }
`;
export const Subheading = styled.p`
        font-size: 14px;
        font-weight: 400;
        color: ${colors.white};
        line-height: 160%;
        @media screen and (${breakpoints.mobileLarge}) {
            max-width: 550px;
        }
        @media screen and (${breakpoints.desktop}) {
            max-width: 550px;
        }
`;