import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex: 1;
    justify-content: space-around;
    align-items: flex-start;
    height: 100%;
    padding: 40px;
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