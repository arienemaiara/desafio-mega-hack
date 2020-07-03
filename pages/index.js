import React from 'react';

import Link from 'next/link';

import { Container } from './components/Site';
//import * as Screen from './components/MediaQueries';

const Home = () => {
	return (
		<Container>
			<section className='hero-section'>
				<div>
					<h1>Os melhores restaurantes <strong>estão aqui</strong></h1>
					<h3>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, laudantium adipisci qui quaerat veniam esse odit! Illum quo culpa labore! Tempore modi eaque nobis aut ex cupiditate voluptatum eum a?
					</h3>
				</div>
				<div>
					<img src='img/hero-img.png' alt='Imagem principal' />
				</div>
      		</section>
			<section class='descricao'>
				<div>
					<img src='img/img_inicio.svg' alt='Imagem principal' />
				</div>
				<div>
					<h2>Bem-vindo ao [nome do projeto]!</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
						molestie arcu pellentesque quis fermentum, consectetur. Adipiscing
						a, venenatis facilisis sed. Nulla integer pellentesque nisi
						consequat posuere imperdiet tincidunt suspendisse sed. Nibh nulla
						pharetra maecenas sit cursus cursus vitae. A nunc accumsan
						lobortis aliquet sed risus commodo facilisis in. Dui congue mauris
						consequat id.
					</p>
					<Link href='/cadastro'><a>Cadastre-se</a></Link>
				</div>
			</section>
			<section className='informacoes'>
				<div>
				<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
						molestie arcu pellentesque quis fermentum, consectetur. Adipiscing
						a, venenatis facilisis sed. Nulla integer pellentesque nisi
						consequat posuere imperdiet tincidunt suspendisse sed. Nibh nulla
						pharetra maecenas sit cursus cursus vitae. A nunc accumsan
						lobortis aliquet sed risus commodo facilisis in. Dui congue mauris
						consequat id.
					</p>
				</div>
			</section>
			<section className='call-to-action'>
				<div>
					<h2>Novas experiências de restaurantes</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
						molestie arcu pellentesque quis fermentum, consectetur. Adipiscing
						a, venenatis facilisis sed. Nulla integer pellentesque nisi
						consequat posuere imperdiet tincidunt suspendisse sed. Nibh nulla
						pharetra maecenas sit cursus cursus vitae. A nunc accumsan
						lobortis aliquet sed risus commodo facilisis in. Dui congue mauris
						consequat id.
					</p>
					<Link href='/cadastro'><a>Cadastre-se</a></Link>
				</div>
				<div>
					
				</div>
			</section>
		</Container>
	)
}

export default Home;
