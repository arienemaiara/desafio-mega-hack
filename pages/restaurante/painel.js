import React from 'react';

import Container from '../components/Container';
import CardsPedidos from '../components/CardsPedidos';
import Card from '../components/Card';

const Pedido = () => (
    <Card>
        <p>Tempo de espera: <span>30 min</span></p>
        <h3>Mesa <strong>6</strong></h3>
        <ul>
            <li><strong>1</strong> Porção de fritas</li>
            <li><strong>1</strong> Porção de fritas</li>
            <li><strong>1</strong> Porção de fritas</li>
        </ul>
        <div>
            <button>Cancelar Pedido</button>
            <button>Fechar Comanda</button>
        </div>
    </Card>
)

const Painel = () => {
    return (
        <>
            <title>Painel | Restaurante</title>
            <Container>
                <div>
                    <section>
                        <h2>Reservas</h2>
                        <Card>
                            <div>

                            </div>
                            <div>
                                <p>Você ainda tem</p>
                                <p><strong>3</strong> mesas disponíveis para</p>
                                <strong>02/07/2020</strong>
                            </div>
                        </Card>
                    </section>
                    <section>
                        <h2>Capacidade</h2>
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
                    </CardsPedidos>
                </section>
            </Container>
        </>

    );
}

export default Painel;