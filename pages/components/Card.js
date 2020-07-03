import styled from 'styled-components';

const Card = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    border-radius: 15px;
    padding: 20px;

    h3 {
        text-align: center;
        margin: 10px 0;
    }

    .highlight {
        color: var(--primary);
    }

    strong {
        font-size: 18px;
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

    @media (max-width: 991px) {
        .buttonLine {
            flex-direction: column
        }
    }
`;

export default Card;