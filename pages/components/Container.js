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

    @media (max-width: 991px) {
        flex-direction: column;
        padding-top: 50px;
    }

`;

export default Container;