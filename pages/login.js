import React from 'react';

import Head from 'next/head';

import { Container } from './components/Site';
import MenuSite from './components/MenuSite';
import Header from './components/Header';
import Form from './components/Form';
import { GradientButton } from './components/Buttons';

const Login = () => {
    return (
        <Container>
			<Head>
				<title>Login | Cuisine Lovers | Seu restaurante seguro</title>
			</Head>
            <MenuSite />
            <Header />
            <section className="info-cadastro info-login">
                <h1>Você já tem login?</h1>
                <Form>
                    <h3>Entre com o e-mail cadastrado</h3>
                    <label>E-mail</label>
                    <input type="text" name="email" />
                    <label>Senha</label>
                    <input type="password" name="senha" />
                    <GradientButton>Entrar</GradientButton>
                </Form>
            </section>
        </Container>
    )
}

export default Login;