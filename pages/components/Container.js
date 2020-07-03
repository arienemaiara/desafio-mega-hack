import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex: 1;
    justify-content: space-around;
    align-items: flex-start;
    height: 100vh;
    padding: 20px 10px;
    background-color: var(--lightGray);

    > div, > section {
        flex: 1;
    }

    section {
        margin: 20px;
    }

    h2 {
        font-size: 18px;
        margin-bottom: 10px;
    }

`;

export default Container;