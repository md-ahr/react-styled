import styled from 'styled-components';
import bgBanner from '../../assets/images/bg-banner.jpeg';

export const MainDiv = styled.div`
    background: linear-gradient(var(--bg-overlay-color), var(--bg-overlay-color)), url(${bgBanner}) no-repeat center center;
    background-size: cover;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;
