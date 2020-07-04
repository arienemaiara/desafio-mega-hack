import React, {useEffect, useState} from 'react';

import Page from '../components/Page';
import MenuRestaurante from '../components/MenuRestaurante';
import Container from '../components/Container';
import CardsPedidos from '../components/CardsPedidos';
import Card from '../components/Card';
import ProgressBar from '../components/ProgressBar';
import { OutlineButton } from '../components/Buttons'; 

const Pedido = () => (
    <Card>
        <p>Tempo de espera: <span className="highlight">30 min</span></p>
        <h3>Mesa <strong>6</strong></h3>
        <ul>
            <li><strong>1</strong> Porção de fritas</li>
            <li><strong>1</strong> Porção de fritas</li>
            <li><strong>1</strong> Porção de fritas</li>
        </ul>
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
                        <Card>
                            <div>

                            </div>
                            <div>
                                <p>Você ainda tem</p>
                                <p><strong className="highlight">3</strong> mesas disponíveis para</p>
                                <strong className="highlight">02/07/2020</strong>
                            </div>
                        </Card>
                    </section>
                    <section>
                        <h2>Capacidade</h2>
                        <Card>
                            <div className="progressBarContainer">
                                <p>80%</p>
                                <ProgressBar width={80} />
                            </div>
                            <hr />
                            <div className="row">
                                <div>
                                    <h4>Pessoas</h4>
                                    <strong className="info-numero">150</strong>
                                </div>
                                <div>
                                    <h4>Mesas reservadas</h4>
                                    <strong className="info-numero">5</strong>
                                </div>
                            </div>
                        </Card>
                    </section>
                </div>
                <section>
                    <h2>Próximos pedidos</h2>
                    <CardsPedidos>
                        <Pedido />
                        <Pedido />
                        <Pedido />
                        <Pedido />
                        <Pedido />
                        <Pedido />
                        <Pedido />
                        <Pedido />
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