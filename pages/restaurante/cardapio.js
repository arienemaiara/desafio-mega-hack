import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import Page from '../components/Page';
import MenuRestaurante from '../components/MenuRestaurante';
import Container from '../components/Container';
import Card from '../components/Card';
import Form from '../components/Form';
import { GradientButton } from '../components/Buttons';

const ItemCardapio = () => {
    return (
        <Card className="item-cardapio">
            <span className="categoria">Categoria</span>
            <p className="nome">Nome do produto</p>
            <strong className="preco">R$ 24,90</strong>
        </Card>
    )
}

const Cardapio = () => {

    const { register, handleSubmit, errors } = useForm();
    
    const onSubmit = (data) => {
        console.log(data)
    };

    return (
        <Page>
            <title>Cardápio | Restaurante</title>
            <MenuRestaurante />
            <Container>
                <section className="cardapio-container">
                    <h2>Cardápio</h2>
                    <Card className="form-cardapio">
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <h3>Inclua um item de cardápio aqui</h3>
                            <label>Nome do produto</label>
                            <input 
                                type="text" 
                                name="nome" 
                                id="nome"
                                ref={register({ required: true })} />
                            {errors.nome && <span className="erro-campo" >Campo obrigatório</span>}

                            <label>Categoria</label>
                            <input 
                                type="text" 
                                name="categoria" 
                                id="categoria"
                                ref={register({ required: true })}
                                />
                            {errors.categoria && <span className="erro-campo" >Campo obrigatório</span>}

                            <label>Descrição</label>
                            <input 
                                type="text" 
                                name="descricao" 
                                id="descricao"
                                ref={register({ required: true })} />
                            {errors.descricao && <span className="erro-campo" >Campo obrigatório</span>}

                            <label>Preço - R$</label>
                            <input 
                                type="text" 
                                name="preco" 
                                id="preco"
                                ref={register({ required: true })} />
                            {errors.preco && <span className="erro-campo" >Campo obrigatório</span>}

                            <GradientButton>Adicionar item ao cardápio</GradientButton>
                        </Form>
                    </Card>
                </section>
                <section className="lista-cardapio">
                    <h2>Itens cadastrados</h2>
                    <ItemCardapio />
                    <ItemCardapio />
                    <ItemCardapio />
                    <ItemCardapio />
                    <ItemCardapio />
                    <ItemCardapio />
                    <ItemCardapio />
                    <ItemCardapio />
                    <ItemCardapio />
                    <ItemCardapio />
                    <ItemCardapio />
                    <ItemCardapio />
                    <ItemCardapio />
                    <ItemCardapio />
                    <ItemCardapio />
                    <ItemCardapio />
                    <ItemCardapio />
                    <ItemCardapio />
                    <ItemCardapio />
                    <ItemCardapio />
                </section>
            </Container>
        </Page>
    );
}

export default Cardapio;