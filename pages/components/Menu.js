import styled from 'styled-components';

const Menu = styled.div`
    height: 100vh;
    min-width: 250px;
    background-color: #FFF;
    box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);
    z-index: 2;

    > ul {
        margin: 20px 0;

        > li {
            padding: 10px 0;
            display: flex;

            cursor: pointer;

            transition: all .2s ease;

            &:hover {
                background-color: var(--lightGray);
            }

            a { 
                display: flex;
                align-items: center;
                height: 30px;
                text-decoration: none;
                color: var(--primary);
            }

            img { 
                margin: 0 7px;
            }
        }
    }
`;

export default Menu;