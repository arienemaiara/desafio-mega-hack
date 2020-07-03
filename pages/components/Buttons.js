import styled, { css } from 'styled-components';

const success = css`
    border-color: var(--success);
    color: var(--success);
`;

const danger = css`
    border-color: var(--danger);
    color: var(--danger);
`;

export const OutlineButton = styled.button`
    background-color: #FFF;
    padding: 5px 12px;
    border-radius: 100px;
    box-sizing: border-box;
    cursor: pointer;

    border-width: 2px;
    border-style: solid;
    border-color: var(--textGray);
    color: var(--textGray);

    ${props => props.success ? success : null}
    ${props => props.danger ? danger : null}

    transition: all .2s ease;

    &:hover {
        opacity: 0.7;
    }
    
`;