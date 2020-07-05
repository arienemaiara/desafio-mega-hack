import React from 'react';
import Link from 'next/link';

import Menu, { MenuMobile, StyledBurger } from './Menu';
import { GradientButton } from '../components/Buttons';

const Burger = ({ open, setOpen }) => {
    return (
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
        </StyledBurger>
    )
}

const MenuRestaurante = ({ open }) => {

    return (
        <Menu open={open}>
            <header>
                <div className='avatar'></div>
                <div>
                    <h1>Cidadão do Mundo</h1>
                    <div className='avaliacoes'>
                        <div className='estrelas'>
                            <img src='../img/estrela_laranja.svg' />
                            <img src='../img/estrela_laranja.svg' />
                            <img src='../img/estrela_laranja.svg' />
                            <img src='../img/estrela_laranja.svg' />
                            <img src='../img/estrela_cinza.svg' />
                        </div>
                        <p>50 avaliações</p>
                    </div>
                </div>

            </header>
            <ul>
                <Link href='/'><li><a><img src='../img/menu/nova_reserva.svg' />Nova Reserva</a></li></Link>
                <Link href='/restaurante/painel'><li><a><img src='../img/menu/painel.svg' />Meu Painel</a></li></Link>
                <Link href='/restaurante/pedido'><li><a><img src='../img/menu/pedido.svg' />Meus Pedidos</a></li></Link>
                <Link href='/restaurante/avaliacao'><li><a><img src='../img/menu/avaliacao.svg' />Minhas Avaliações</a></li></Link>
                <Link href='/restaurante/cardapio'><li><a><img src='../img/menu/cardapio.svg' />Cardápio</a></li></Link>
                <Link href='/'><li><a>Sair</a></li></Link>
            </ul>
            <div className='logo-container'>
                <img src="../../img/logo.png" />
            </div>
        </Menu>
    )

}

export default function MenuLateral() {

    const [open, setOpen] = React.useState(false);

    return (
        <>
            <MenuMobile><Burger open={open} setOpen={setOpen} /></MenuMobile>
            <MenuRestaurante open={open} setOpen={setOpen} />
        </>
    )
}