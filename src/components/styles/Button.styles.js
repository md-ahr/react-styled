import styled from 'styled-components';

export const ButtonStyledComponent = styled.button`
    width: 100%;
    margin-top: 10px;
    padding: 15px 0;
    font-size: 112.5%;
    color: var(--white-color);
    background-color: var(--primary-color);
    border: 0;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.75px;
    &:focus {
        box-shadow: 0 0 0 2px rgba(250, 146, 38, 0.5);
    }
`;
