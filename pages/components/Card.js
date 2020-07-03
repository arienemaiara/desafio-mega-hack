import styled from 'styled-components';

const Card = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    border-radius: 15px;
    padding: 20px;

    .row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    h3 {
        text-align: center;
        margin: 10px 0;
    }

    .info-numero {
        font-size: 22px;
        font-weight: 500;
    }

    .highlight {
        color: var(--primary);
    }

    strong {
        font-size: 18px;
    }

    hr {
        border: 1px solid #DDD;
        border-radius: 5px;
        margin: 10px 0;
    }

    li {
        list-style: none;
        margin: 5px 0;
    }

    .buttonLine {
        display: flex;
        justify-content: space-around;
        margin-top: 20px;

        > button {
            margin: 2px;
        }
    }

    .progressBarContainer {
        margin: 20px 0 30px;
    }

    &.form-cardapio {
        max-width: 495px;
    }

    &.item-cardapio {
        margin: 10px 0;
        cursor: pointer;

        .categoria {
            font-size: 12px;
            color: var(--textGray);
            font-weight: 500;
            line-height: 29px;
        }

        .nome {
            text-align: center;
            font-size: 16px;
            line-height: 29px;
            margin: 10px 0;
        }

        .preco {
            font-weight: 500;
            text-align: center;
        }
    }

    @media (max-width: 991px) {
        .buttonLine {
            flex-direction: column
        }
    }
`;

export default Card;