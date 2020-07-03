import React from 'react';
import Link from 'next/link';

import Menu from './Menu';

const MenuRestaurante = () => {
    return (
        <Menu>
            <header>

            </header>
            <ul>
                <Link href='/'><li><a><img src='../img/menu/painel.svg' />Meu Painel</a></li></Link>
                <Link href='/'><li><a><img src='../img/menu/nova_reserva.svg' />Nova Reserva</a></li></Link>
                <Link href='/'><li><a><img src='../img/menu/pedido.svg' />Meus Pedidos</a></li></Link>
                <Link href='/'><li><a><img src='../img/menu/avaliacao.svg' />Minhas Avaliações</a></li></Link>
                <Link href='/'><li><a><img src='../img/menu/cardapio.svg' />Cardápio</a></li></Link>
            </ul>
        </Menu>
    );
}

export default MenuRestaurante;