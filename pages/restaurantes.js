import React from 'react';
import axios from 'axios';

import Link from 'next/link';

const Restaurante = ({ restaurantes }) => (
    <div>
        <ul>
            { restaurantes.map(restaurante => (
                <li key={restaurante.id}>
                    <Link href={`/restaurantes/${restaurante.id}`}>
                        <a>{restaurante.nome}</a>
                    </Link>
                </li>
            ))}
        </ul>
    </div>
)

Restaurante.getInitialProps = async () => {
    console.log('oi')
    const response = await axios.get(
        'https://5efe0296dd373900160b3c01.mockapi.io/restaurantes/'
    );

    return { restaurantes: response.data }
}

export default Restaurante;