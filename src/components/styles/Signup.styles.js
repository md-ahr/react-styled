import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Card = styled.div`
    width: 25%;
    padding: 30px 40px 35px 40px;
    background-color: var(--white-color);
    border-radius: 5px;
    box-shadow: 0 5px 10px rgba(255, 255, 255, 0.25);
`;

export const Form = styled.form`
    padding-top: 25px;
    border-top: 2px solid var(--primary-color);
`;

export const H1 = styled.h1`
    padding-bottom: 15px;
    font-size: 137.5%;
    text-transform: uppercase;
`;

export const P = styled.p`
    margin: 20px 0 0 0;
    font-size: 87.5%;
    text-align: center;
    color: var(--grey-color);
`;

export const A = styled(Link)`
    transition: all 0.5s ease;
    &:hover {
        color: var(--primary-color);
    }
`;
