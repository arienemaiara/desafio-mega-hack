import styled from 'styled-components';

const Navbar = styled.nav`
    display: flex;
    justify-content: space-around;
    height: 87px;
    background: #FFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    z-index: 2;

    div {
        flex: 1;
    }

    .logo-container {
        width: 150px;
        height: 100%;
        display: flex;
        align-items: center;
        margin-left: 50px;
    }

    ul {
        display: flex;
        flex: 1;
        justify-content: flex-end;
        align-items: center;
        margin-right: 50px;

        li {
            list-style: none;
            cursor: pointer;
            font-weight: bold;

            button {
                width: 100px;
                font-weight: bold;
                text-transform: uppercase;
            }
        }
    }
`;

export default Navbar;