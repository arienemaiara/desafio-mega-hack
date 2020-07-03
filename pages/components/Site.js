import styled from 'styled-components';

//import * as screenType from '../../utils/screenSize';
//import * as Screen from './components/MediaQueries';

export const NavBar = styled.nav`
`;

export const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    min-height: 100vh;
    
    > section {
        display: flex;
        padding: 40px;

        &.hero-section {
            height: 800px;
            background-image: url('img/bg_principal.svg');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: 0 -200px;
        }

        &.informacoes {
            background: url('img/bg_secundario.svg') no-repeat;
            background-size: cover;
            background-position-y: -265px;
            height: 1800px;
        }
        
    }

    img { 
        
    }

    @media(min-width: 768px) and (max-width: 991px) {
        
    }

    @media(max-width: 767px) {
       
    }
`;