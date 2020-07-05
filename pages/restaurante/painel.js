import React, {useEffect, useState} from 'react';

import Page from '../components/Page';
import MenuRestaurante from '../components/MenuRestaurante';
import Container from '../components/Container';
import CardsPedidos from '../components/CardsPedidos';
import Card from '../components/Card';
import ProgressBar from '../components/ProgressBar';
import { OutlineButton } from '../components/Buttons'; 
import Mesa from '../components/Mesa';

const Pedido = (props) => (
    <Card>
        <p>Tempo de espera: <span className="highlight">30 min</span></p>
        {props.children}
        <div className="buttonLine">
            <OutlineButton danger>Cancelar Pedido</OutlineButton>
            <OutlineButton success>Fechar Comanda</OutlineButton>
        </div>
    </Card>
)

const Painel = () => {

    const [dadosRestaurante, setDadosRestaurante] = useState();

    useEffect(() => {
        if(typeof(Storage) !== "undefined"){
            const restaurante = JSON.parse(localStorage.getItem('restaurante'))
            setDadosRestaurante(restaurante)
        }
    }, []);
    

    return (
        <Page>
            <title>Painel | Restaurante</title>
            <MenuRestaurante />
            <Container>
                <div>
                    <section>
                        <h2>Reservas</h2>
                        <Card className='painel-reserva'>
                            <Mesa />
                            <div>
                                <p>Você ainda tem</p>
                                <strong className="highlight">3</strong>
                                <p>mesas disponíveis para</p>
                                <strong className="highlight">02/07/2020</strong>
                            </div>
                        </Card>
                    </section>
                    <section>
                        <h2>Capacidade</h2>
                        <Card>
                            <div className="progressBarContainer">
                                <p>30%</p>
                                <ProgressBar width={30} />
                            </div>
                            <hr />
                            <div className="row">
                                <div>
                                    <h4>Pessoas</h4>
                                    <strong className="info-numero">20</strong>
                                </div>
                                <div>
                                    <h4>Mesas reservadas</h4>
                                    <strong className="info-numero">3</strong>
                                </div>
                            </div>
                        </Card>
                    </section>
                </div>
                <section>
                    <h2>Próximos pedidos</h2>
                    <CardsPedidos>
                        <Pedido>
                            <h3>Mesa <strong>1</strong></h3>
                            <ul>
                                <li><strong>1</strong> Porção de fritas</li>
                                <li><strong>2</strong> Chopps Brahma</li>
                                <li><strong>3</strong> Espetinho de carne</li>
                            </ul>
                        </Pedido>
                        <Pedido>
                            <h3>Mesa <strong>3</strong></h3>
                            <ul>
                                <li><strong>2</strong> Parmeggiana de frango</li>
                                <li><strong>1</strong> Limonada pequena</li>
                                <li><strong>1</strong> Coca-cola lata</li>
                            </ul>
                        </Pedido>
                        <Pedido>
                            <h3>Mesa <strong>5</strong></h3>
                            <ul>
                                <li><strong>3</strong> Espetinho de frango</li>
                                <li><strong>2</strong> Chopps Brahma</li>
                                <li><strong>3</strong> Espetinho de carne</li>
                            </ul>
                        </Pedido>
                        
                    </CardsPedidos>
                </section>
            </Container>
        </Page>

    );
}

// // Painel.getInitialProps = () => {
// //     const restaurante = localStorage.getItem('restaurante')
// //     return { restaurante }
// // }

export default Painel;