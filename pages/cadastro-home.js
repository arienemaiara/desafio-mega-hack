import React from 'react';

import Head from 'next/head';
import Link from 'next/link';

import { Container } from './components/Site';
import MenuSite from './components/MenuSite';

const Cadastro = () => {
    return (
        <Container>
            <Head>
                <title>Cadastro</title>
            </Head>
            <MenuSite />
            <header>
                <h1>Olá!</h1>
                <h2>Que bom que você está aqui.</h2>
            </header>
            <section className="info-cadastro">
                <h1>Qual seu perfil?</h1>
                <div>
                    <div>
                        <Link href='/clientes/cadastro'>
                            <div className="cliente">
                                <img src='img/perfil_cliente.svg' />
                                <p>Sou cliente</p>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link href='/restaurantes/cadastro'>
                            <div className="restaurante">
                                <img src='img/perfil_restaurante.svg' />
                                <p>Tenho um restaurante</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </Container>
    )
}

export default Cadastro;