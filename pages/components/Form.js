import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    flex-direction: column;

    > section {
        display: flex;
        flex-direction: column;
        padding: 30px 0;
    }

    section:first-child {
        border-bottom: 1px solid var(--primary);
    }

    .check-list {
        > div {
            margin: 10px 0;
        }

        div > label {
            margin-left: 10px;
            color: #000;
        }

        input[type=checkbox] {
            border: 1px solid var(--primary);
        }
    }

    h2 { 
        font-weight: 500;
        font-size: 24px;
        line-height: 36px;
    }

    h3 {
        color: var(--secondary);
        font-weight: 500;
        font-size: 18px;
        text-align: left;
        margin-bottom: 15px;
    }

    h4 {
        font-weight: normal;
        font-size: 20px;
        line-height: 30px;
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

    .input-small-number {
        width: 100px;
    }

    .erro-campo {
        color: var(--danger);
        font-size: 12px;
    }

    button {
        margin-top: 15px;
    }

    .input-group {
        display: flex;

        > div {
            display: flex;
            flex-direction: column;
            flex: 3;
        }

        .small-input {
            flex: 1;
        }

        div:first-child {
            margin-right: 15px;
        }
    }
`;

export default Form;