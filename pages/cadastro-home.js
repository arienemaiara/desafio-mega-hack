import React from 'react';

import Head from 'next/head';
import Link from 'next/link';

import { Container } from './components/Site';
import MenuSite from './components/MenuSite';
import Header from './components/Header';

const Cadastro = () => {
    return (
        <Container>
            <Head>
                <title>Cadastro</title>
            </Head>
            <MenuSite />
            <Header />
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
                        <Link href='/cadastro-restaurante'>
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