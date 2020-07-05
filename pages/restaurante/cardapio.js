import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import Page from '../components/Page';
import MenuRestaurante from '../components/MenuRestaurante';
import Container from '../components/Container';
import Card from '../components/Card';
import Form from '../components/Form';
import { GradientButton } from '../components/Buttons';

const ItemCardapio = ({ item }) => {
    const { categoria, nome, descricao, preco } = item;
    return (
        <Card className="item-cardapio">
            <span className="categoria">{categoria}</span>
            <p className="nome">{nome}</p>
            <p className="descricao">{descricao}</p>
            <strong className="preco">R$ {preco}</strong>
        </Card>
    )
}

const Cardapio = () => {

    const [listaCardapio, setListaCardapio] = useState([
        {
            id: 1,
            nome: 'Parmeggiana de Frango',
            descricao: 'Filé de frango a parmeggiana, acompanha arroz e fritas',
            categoria: 'Refeição',
            preco: 24.90
        },
        {
            id: 2,
            nome: 'Parmeggiana de Carne',
            descricao: 'Contra filé a parmeggiana, acompanha arroz e fritas',
            categoria: 'Refeição',
            preco: 28.90
        },
        {
            id: 3,
            nome: 'Bife acebolado',
            descricao: 'Contra filé acebolado, acompanha arroz, feijão, salada e fritas',
            categoria: 'Refeição',
            preco: 22.90
        },
        {
            id: 4,
            nome: 'Coca-cola lata',
            descricao: 'Coca-cola lata 350ml',
            categoria: 'Bebidas',
            preco: 5.90
        },
        {
            id: 5,
            nome: 'Guaraná lata',
            descricao: 'Guaraná lata 350ml',
            categoria: 'Bebidas',
            preco: 5.90
        },
        {
            id: 6,
            nome: 'Petit gateau',
            descricao: 'Petit gateau acompanhado de uma bola de sorvete de creme',
            categoria: 'Sobremesa',
            preco: 12.90
        },
    ])

    const { register, handleSubmit, errors, reset } = useForm();
    
    const onSubmit = (data) => {
        setListaCardapio([data, ...listaCardapio]);
        reset({
            firstName: "bill"
          }, {
            errors: true, // errors will not be reset 
            dirtyFields: true, // dirtyFields will not be reset
            dirty: true, // dirty will not be reset
            isSubmitted: false,
            touched: false,
            isValid: false,
            submitCount: false,
        });
        toast.success('Item adicionado com sucesso!')
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
                    {listaCardapio.map(item => {
                        return (<ItemCardapio item={item} />)
                    })}
                </section>
            </Container>
        </Page>
    );
}

export default Cardapio;