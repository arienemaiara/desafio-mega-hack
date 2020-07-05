import styled from 'styled-components';

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
        padding: 0 30px;

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
            justify-content: center;
            align-items: center;

            .title {
                font-size: 18px;
                text-transform: uppercase;
                text-align: center;
                color: var(--primary);

                border-bottom: 1px solid #ddd;
                padding-bottom: 30px;
                margin-bottom: 30px;

                > div {
                    flex: 1;
                    align-items: center;
                    justify-content: center;
                }
            }

            .row { 
                justify-content: space-around;
            }

        }

        > div {
            flex: 1;
            padding: 50px;
        }
        
    }

    img {
        max-width: 100%;
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

    .info-login {
        align-items: center;
        
        form {
            width: 400px;
            margin-top: 50px; 
        }
    }

    /* cellphones */
    @media(max-width: 768px) {

        header {
            background-image: none;
            background: var(--primary);
            height: 200px;

            padding: 10px 20px;

            h1 {
                font-size: 36px;
            }

            h2 {
                font-size: 28px;
                line-height: 1.2;
            }
        }

        > section {

            margin-bottom: 30px;

            > div {
                padding: 10px;
            }

            &.hero-section {
                height: 800px;
                background-position: 0;
            }

            h1 {
                color: #FFF;
                font-size: 36px;
                line-height: 1.2;
                margin-top: 50px;
            }

            &.informacoes {
                height: 600px;
                background: linear-gradient(179.68deg, var(--primary) -13.56%, var(--secondary) 158.3%);
                margin: 30px 0;
            }
            
        }

        .img-container {
            display: none;
        }

        .info-cadastro {
            margin-top: 0;

            > div {
                flex-direction: column;

                > div {
                    width: initial;
                    margin: 20px 0;
                }
            }
        }

        .form-cadastro {
            width: 100%;
            padding: 10px;
            margin: 20px 0 40px;
        }

    }

    /* tablets */
    @media(min-width: 768px) {
        
    }

    /* small desktops */
    @media(min-width: 1024px) and (max-width: 1680px) {

        header {
            background-position: 0;
        }

        > section { 

            > div {
                flex: 2;
            }

            &.hero-section {
                height: 800px;
                background-position: 0;
            }

            &.informacoes {
                height: 800px;
                background-position-y: -200px;

                .img-container {
                    flex: 1;
                }
            }
        }
    }

    /* normal desktops */
    @media(min-width: 1280px) {
        
    }

    /* larger desktops */
    @media(min-width: 1680px) {
       
    }
`;

const NavBar = styled.nav`
`;

export default NavBar;