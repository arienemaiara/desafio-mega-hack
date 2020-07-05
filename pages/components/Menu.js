import styled from 'styled-components';

const Menu = styled.div`
    min-height: 100vh;
    min-width: 230px;
    background-color: #FFF;
    box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);
    z-index: 4;
    display: ${({ open }) => open ? 'flex' : 'none'};
    flex-direction: column;
    justify-content: space-between;

    header {
        display: flex;
        padding: 20px;

        .avatar {
            width: 64px;
            height: 64px;
            margin-right: 10px;
            background: #877;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 20px;
        }

        h1 {
            font-size: 14px;
            line-height: 18px;
            letter-spacing: 0.428571px;
        }

        .avaliacoes {
            p {
                font-size: 12px;
                color: #7B7B7B;
            }
        }
    }

    > ul {
        padding: 20px 0;
        height: 100%;

        > li {
            padding: 10px 20px;
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

    .logo-container {
        width: 250px;
        padding: 20px;
        opacity: 0.9;

        img {
            width: 100%;
        }
    }

    @media(min-width: 767px) {
        display: flex;
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