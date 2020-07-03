import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    flex-direction: column;

    h3 {
        color: var(--secondary);
        font-weight: 500;
        font-size: 18px;
        text-align: left;
        margin-bottom: 15px;
    }

    label {
        margin-top: 10px;
    }

    input {
        border: 1px solid #FF8000;
        border-radius: 8px;
        padding: 8px 12px;
        margin: 2px 0;
    }

    .erro-campo {
        color: var(--danger);
        font-size: 12px;
    }

    button {
        margin-top: 15px;
    }
`;

export default Form;