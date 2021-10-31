import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const H3 = styled.h3`
    color: var(--white-color);
    font-size: 275%;
    flex-basis: 100%;
    align-self: flex-end;
    text-align: center;
    text-transform: capitalize;
`;

export const A = styled(Link)`
    margin-top: 30px;
    padding: 20px 40px;
    color: var(--white-color);
    background-color: var(--primary-color);
    font-size: 125%;
    border-radius: 5px;
    text-transform: uppercase;
    align-self: flex-start;
`;
