import React from 'react';

import Head from 'next/head';
import Link from 'next/link';

import { Container } from './components/Site';
import MenuSite from './components/MenuSite';
import { GradientButton } from './components/Buttons';
import Card from './components/Card';

const Home = () => {
	return (
		<Container>
			<Head>
				<title>Cuisine Lovers | Seu restaurante seguro</title>
			</Head>
			<MenuSite />
			<section className='hero-section'>
				<div>
					<h1>Os melhores restaurantes <strong>estão aqui</strong></h1>
					<h3>
						Encontre seu restaurante preferido mais perto de você!
						Além da reserva antecipada - para não correr o risco de ficar sem lugar -, visualize o cardápio completo e tenha sua refeição pronta poucos minutos depois da sua chegada no restaurante!
						Prezamos pela sua segurança e pelo seu tempo!
					</h3>
					<Link href='/cadastro'><a>Cadastre-se</a></Link>
				</div>
				<div className='img-container'>
					<img src='img/hero-img.png' alt='Imagem principal' />
				</div>
      		</section>
			<section class='descricao'>
				<div className='img-container'>
					<img src='img/img_inicio.svg' alt='Imagem principal' />
				</div>
				<div>
					<h2 className="texto-gradient">Bem-vindo ao Cuisine Lovers!</h2>
					<p>
					Para os amantes de restaurante e também para quem precisa fazer as refeições fora de casa, no Cousine você tem um ambiente seguro e ágil para manter sua rotina e suas atividades dentro da previsão!
					Viajou e não sabe onde comer? Verifique com antecedência no COUSINE e reserve sua mesa!
					Aniversário da vovó que adora aquele prato especial? Acesse o cardápio do estabelecimento e já programe o horário de chegada para receber os pratos mais rápido.
					</p>
					<Link href='/cadastro'><GradientButton>Cadastre-se</GradientButton></Link>
				</div>
			</section>
			<section className='informacoes'>
				<Card>
					<div className='row title'>
						<div><strong>Reserve</strong></div>
						<div><strong>Acompanhe pedidos</strong></div>
						<div><strong>Melhores avaliações</strong></div>
					</div>
					<div className='row'>
						<div>
							<img src='img/reserve.svg' alt='Reserve' />
						</div>
						<div>
							<img src='img/acompanhe_pedidos.svg' alt='Acompanhe pedidos' />
						</div>
						<div>
							<img src='img/avaliacoes.svg' alt='Melhores avaliações' />
						</div>
					</div>
				</Card>
			</section>
			<section className='call-to-action'>
				<div>
					<h2 className="texto-gradient">Novas experiências de restaurantes</h2>
					<p>
					Com nossas métricas cuidadosas de cadastro, o restaurante precisa seguir passos de higienização 
					e proteção aos clientes antes de funcionar na plataforma. 
					Além disso, com um sistema inteligente de reservas e fila de espera, você acompanha em tempo real 
					a lotação de seu restaurante favorito. Somado a isso, um sistemas de avaliação seguro para você 
					passar a ter ainda mais confiança antes de sair de casa.
					</p>
					<Link href='/cadastro'><GradientButton>Cadastre-se</GradientButton></Link>
				</div>
				<div className='img-container'>
					
				</div>
			</section>
		</Container>
	)
}

export default Home;
