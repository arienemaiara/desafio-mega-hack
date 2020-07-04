import React from 'react';

import Head from 'next/head';
import Link from 'next/link';

import { Container } from './components/Site';
import MenuSite from './components/MenuSite';
import { GradientButton } from './components/Buttons';

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
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, laudantium adipisci qui quaerat veniam esse odit! Illum quo culpa labore! Tempore modi eaque nobis aut ex cupiditate voluptatum eum a?
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
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
						molestie arcu pellentesque quis fermentum, consectetur. Adipiscing
						a, venenatis facilisis sed. Nulla integer pellentesque nisi
						consequat posuere imperdiet tincidunt suspendisse sed. Nibh nulla
						pharetra maecenas sit cursus cursus vitae. A nunc accumsan
						lobortis aliquet sed risus commodo facilisis in. Dui congue mauris
						consequat id.
					</p>
					<Link href='/cadastro'><GradientButton>Cadastre-se</GradientButton></Link>
				</div>
			</section>
			<section className='informacoes'>
				<div>
					
				</div>
			</section>
			<section className='call-to-action'>
				<div>
					<h2 className="texto-gradient">Novas experiências de restaurantes</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
						molestie arcu pellentesque quis fermentum, consectetur. Adipiscing
						a, venenatis facilisis sed. Nulla integer pellentesque nisi
						consequat posuere imperdiet tincidunt suspendisse sed. Nibh nulla
						pharetra maecenas sit cursus cursus vitae. A nunc accumsan
						lobortis aliquet sed risus commodo facilisis in. Dui congue mauris
						consequat id.
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
