import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import cep from 'cep-promise';
import { toast } from 'react-toastify';

import Head from 'next/head';
import Router from 'next/router'

import { Container } from './components/Site';
import MenuSite from './components/MenuSite';
import Header from './components/Header';
import Form from './components/Form';
import { GradientButton } from './components/Buttons';

import api from '../services/api';

const CadastroParte1 = ({ onSubmit }) => {
    const { register, handleSubmit, errors } = useForm();
    const [enderecoCEP, setEnderecoCEP] = useState();

    const buscarCep = (e) => {
        const cepValue = e.target.value;
        cep(cepValue)
            .then(setEnderecoCEP)
            .catch(() => toast.error('CEP não encontrado!'))
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <label>Nome do Restaurante</label>
            <input
                type="text"
                name="nome"
                ref={register({ required: true })} />
            {errors.nome && <span className="erro-campo" >Campo obrigatório</span>}

            <label>E-mail</label>
            <input
                type="text"
                name="email"
                ref={register({ required: true })} />
            {errors.email && <span className="erro-campo" >Campo obrigatório</span>}

            <label>Telefone principal</label>
            <input
                type="text"
                name="telefone"
                ref={register({ required: true })} />
            {errors.telefone && <span className="erro-campo" >Campo obrigatório</span>}
            <div className="input-group">
                <div className="small-input">
                    <label>CEP</label>
                    <input
                        type="text"
                        name="cep"
                        ref={register({ required: true })}
                        onBlur={buscarCep} />
                    {errors.cep && <span className="erro-campo" >Campo obrigatório</span>}
                </div>
                <div>
                    <label>Endereço</label>
                    <input
                        type="text"
                        name="endereco"
                        value={enderecoCEP?.street}
                        ref={register({ required: true })} />
                    {errors.endereco && <span className="erro-campo" >Campo obrigatório</span>}
                </div>
            </div>
            <div className="input-group">

                <div className="small-input">
                    <label>Número</label>
                    <input
                        type="text"
                        name="numero"
                        ref={register({ required: true })} />
                    {errors.numero && <span className="erro-campo" >Campo obrigatório</span>}
                </div>
                <div>
                    <label>Bairro</label>
                    <input
                        type="text"
                        name="bairro"
                        value={enderecoCEP?.neighborhood}
                        ref={register({ required: true })} />
                    {errors.bairro && <span className="erro-campo" >Campo obrigatório</span>}
                </div>
            </div>
            <div className="input-group">
                <div>
                    <label>Cidade</label>
                    <input
                        type="text"
                        name="cidade"
                        value={enderecoCEP?.city}
                        ref={register({ required: true })} />
                    {errors.cidade && <span className="erro-campo" >Campo obrigatório</span>}
                </div>
                <div className="small-input">
                    <label>Estado</label>
                    <input
                        type="text"
                        name="estado"
                        value={enderecoCEP?.state}
                        ref={register({ required: true })} />
                    {errors.estado && <span className="erro-campo" >Campo obrigatório</span>}
                </div>
            </div>
            <div>
                <GradientButton>{'Próximo >>'}</GradientButton>
            </div>
            
        </Form>
    )
}

const CadastroParte2 = ({ onSubmit }) => {
    const { register, handleSubmit, errors } = useForm();

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <section>
                <h2>Capacidade</h2>
                <label>Quantas mesas o salão do seu restaurante possui?</label>
                <input
                    type="number"
                    name="qtd_mesas"
                    className="input-small-number"
                    ref={register({ required: true })} />
                {errors.qtd_mesas && <span className="erro-campo" >Campo obrigatório</span>}

                <label>Quantas pessoas em cada mesa?</label>
                <input
                    type="number"
                    name="pessoas_mesa"
                    className="input-small-number"
                    ref={register({ required: true })} />
                {errors.pessoas_mesa && <span className="erro-campo" >Campo obrigatório</span>}

                <label>Quantas pessoas é a lotação máxima do seu restaurante?</label>
                <input
                    type="number"
                    name="lotacao_maxima"
                    className="input-small-number"
                    ref={register({ required: true })} />
                {errors.lotacao_maxima && <span className="erro-campo" >Campo obrigatório</span>}

                <label>Qual a porcentagem de ocupação máxima do salão permitida na sua cidade?</label>
                <input
                    type="number"
                    name="porcentagem_ocupacao"
                    className="input-small-number"
                    ref={register({ required: true })} />
                {errors.porcentagem_ocupacao && <span className="erro-campo" >Campo obrigatório</span>}
            </section>
            <section className="check-list">
                <h2>Segurança</h2>
                <h4>Quais as medidas de prevenção contra o novo coronavírus foram adotadas pelo seu restaurante?</h4>
                <label>Marque pelo menos 3, mas lembre-se: seu estabelecimento será avaliado pelos clientes por esses pontos:</label>
                <div>
                    <input type="checkbox" name="mascara" ref={register} />
                    <label for="mascara">Utilização de máscara para os funcionários</label>
                </div>
                <div>
                    <input type="checkbox" name="alcool_gel_entrada" ref={register} />
                    <label for="alcool_gel_entrada">Oferecimento de álcool em gel para os clientes na entrada do estabelecimento</label>
                </div>
                <div>
                    <input type="checkbox" name="alcool_gel_mesa" ref={register} />
                    <label for="alcool_gel_mesa">Disponibilização de álcool em gel nas mesas</label>
                </div>
                <div>
                    <input type="checkbox" name="higiene_mesa" ref={register} />
                    <label for="higiene_mesa">Higienização das mesas com desinfetante na troca de clientes</label>
                </div>
                <div>
                    <input type="checkbox" name="distancia_mesa" ref={register} />
                    <label for="distancia_mesa">Distanciamento entre as mesas de pelo menos 2m</label>
                </div>
                <div>
                    <input type="checkbox" name="ventilacao" ref={register} />
                    <label for="ventilacao">Janelas abertas para a ventilação adequada</label>
                </div>
                <div>
                    <input type="checkbox" name="mascara_luva" ref={register} />
                    <label for="mascara_luva">Obrigatoriedade de uso de máscaras e luvas descartáveis em caso de buffets self-services</label>
                </div>
            </section>
            <div>
                <GradientButton>Confirmar</GradientButton>
            </div>
        </Form>
    )
}

const CadastroRestaurante = () => {

    const [parteCadastro, setParteCadastro] = useState(1);
    const [subtitulo, setSubtitulo] = useState('Conte-nos um pouco sobre você')
    const [cadastro1, setCadastro1] = useState();

    const onSubmitParte1 = (data) => {
        setCadastro1(data);
        setParteCadastro(2);
        setSubtitulo('Agora vamos falar de capacidade e segurança')
    };

    const onSubmitParte2 = async (data) => {
        const formData = {...cadastro1, ...data}

        const response = await api.post('/restaurantes', formData);

        if (response.status === 201) {
            //Grava informação do restaurante no local storage
            localStorage.setItem('restaurante', JSON.stringify(response.data));
            toast.success('Dados cadastrados com sucesso! Efetue o login para entrar no sistema.');
            Router.push('/login');
        }
        else {
            toast.error('Erro ao cadastrar os dados. Tente novamente.')
        }
    };

    return (
        <Container>
            <Head>
                <title>Cadastro Restaurante</title>
            </Head>
            <MenuSite />
            <Header
                title='Bem-vindo!'
                subtitle={subtitulo}
            />
            <section>
                <div className="form-cadastro">
                    {parteCadastro === 1 ?
                        <CadastroParte1 onSubmit={onSubmitParte1} />
                        : <CadastroParte2 onSubmit={onSubmitParte2} />
                    }
                </div>

            </section>
        </Container>
    )
}

export default CadastroRestaurante;