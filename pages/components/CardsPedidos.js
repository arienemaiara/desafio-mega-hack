import styled from 'styled-components';

const CardsPedidos = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    max-height: calc(100vh - 146px);;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 4px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #CCC;
        border-radius: 4px;
    }
    ::-webkit-scrollbar-track {
        background-color: #EEE;
    }

    > div {
        margin: 10px;
    }
`;

export default CardsPedidos;