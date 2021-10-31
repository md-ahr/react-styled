import styled from 'styled-components';

export const FormGroup = styled.div`
    margin-bottom: 20px;
    &:last-child {
        margin-bottom: 0;
    }
`;

export const Label = styled.label`
    display: block;
    padding-bottom: 10px;
    font-size: 87.5%;
    font-weight: bold;
`;

export const Input = styled.input`
    width: 100%;
    padding: 15px;
    font-size: 87.5%;
    border: 1px solid var(--border-color);
    border-radius: 5px;
    &:focus {
        border-color: var(--primary-color);
        box-shadow: 0 3px 6px rgba(250, 146, 38, 0.1);
    }
`;

export const Span = styled.span`
    margin-top: 5px;
    color: red;
    font-size: 81.25%;
`;
