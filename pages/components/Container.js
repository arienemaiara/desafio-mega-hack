import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex: 1;
    justify-content: space-around;
    align-items: flex-start;
    min-height: 100vh;
    padding: 20px 10px;
    background-color: var(--lightGray);

    > div, > section {
        flex: 1;
        width: 100%;
    }

    section {
        margin: 20px;
    }

    h2 {
        font-size: 18px;
        margin-bottom: 10px;
    }

    .lista-cardapio {
        max-width: 350px;
        max-height: 100vh;
        background-color: #FFF;
        margin: -20px -10px;
        padding: 40px 20px;

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

        @media (max-width: 991px) {
            max-width: 100%;
        }
    }

    @media (max-width: 991px) {
        flex-direction: column;
        padding-top: 50px;
    }

`;

export default Container;