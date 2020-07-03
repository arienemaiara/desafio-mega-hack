import styled from 'styled-components';

//import * as screenType from '../../utils/screenSize';
//import * as Screen from './components/MediaQueries';

export default NavBar = styled.nav`
`;

export const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    min-height: 100vh;

    header {
        height: 400px;
        background-image: url('img/bg_header.svg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 0 -200px;
        padding: 50px;
        color: #FFF;

        h1 {
            font-size: 48px;
            line-height: 72px;
        }

        h2 {
            font-size: 36px;
            line-height: 54px;
            font-weight: 500;
        }
    }
    
    > section {
        display: flex;
        padding: 40px;

        h1 {
            color: #FFF;
            font-size: 48px;
            line-height: 72px;
            font-weight: 400;
        }

        h2 { 
            font-size: 28px;
            line-height: 42px;
            margin-bottom: 15px;
        }

        p {
            font-size: 16px;
            line-height: 40px;
        }

        button {
            text-transform: uppercase;
            font-weight: bold;
            padding: 12px 15px;
            margin-top: 20px;
        }

        &.hero-section {
            height: 900px;
            background-image: url('img/bg_principal.svg');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: 0 -200px;

            h3 {
                color: #FFF;
                font-weight: normal;
                font-size: 18px;
                line-height: 27px;
                margin: 20px 0 50px;
            }

            a {
                color: var(--primary);
                text-decoration: none;
                text-transform: uppercase;
                font-weight: bold;
                background: #FFF;
                border-radius: 100px;
                padding: 12px 18px;

                transition: all .2s ease;

                &:hover {
                    opacity: 0.7;
                }
            }
        }

        &.informacoes {
            background: url('img/bg_secundario.svg') no-repeat;
            background-size: cover;
            background-position-y: -360px;
            height: 1400px;
        }

        > div {
            flex: 1;
            padding: 50px;
        }
        
    }

    .texto-gradient { 
        background: linear-gradient(to right, #ff8000, #c0272d);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .info-cadastro {
        display: flex;
        flex-direction: column;
        margin-top: -80px;

        h1 {
            color: var(--primary);
            text-align: center;
        }

        > div {
            display: flex;
            justify-content: center;
            

            > div {
                width: 250px;
                margin: 0 50px;
                cursor: pointer;

                > div {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
                
                .cliente {
                    color: var(--primary);
                }

                .restaurante {
                    color: var(--secondary);
                }

                p {
                    font-size: 36px;
                    line-height: 54px;
                    text-align: center;
                }
            }
        }
    }

    .form-cadastro {
        max-width: 750px;
        margin-top: -80px;
    }

    @media(min-width: 768px) and (max-width: 991px) {
        
    }

    @media(max-width: 767px) {
       
    }
`;