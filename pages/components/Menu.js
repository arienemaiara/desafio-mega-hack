import styled from 'styled-components';

const Menu = styled.div`
    height: 100vh;
    min-width: 250px;
    background-color: #FFF;
    box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);
    z-index: 2;
    display: ${({ open }) => open ? 'block' : 'none'};

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

    @media(min-width: 767px) {
        display: block;
    }

    @media(max-width: 767px) {
        padding-top: 50px;
    }
`;

export const MenuMobile = styled.div`
    position: absolute;
    height: 50px;
    width: 100%;
    background: #FFF;
    box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);
    z-index: 3;

    display: none;

    @media(max-width: 767px) {
        display: block;
    }
`;

export const StyledBurger = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;
    background: #FFF;
    &:focus {
        outline: none;
    }

    div {
        width: 2rem;
        height: 0.25rem;
        background: var(--primary);
        border-radius: 10px;
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;

        :first-child {
            transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }

        :nth-child(2) {
            opacity: ${({ open }) => open ? '0' : '1'};
            transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
        }

        :nth-child(3) {
            transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
`

export default Menu;