import React from 'react';
import axios from 'axios';

const Restaurante = ({ restaurante }) => (
    <div>
        {restaurante.nome}
    </div>
)

Restaurante.getInitialProps = async ({ query }) => {
    console.log('oi')
    const response = await axios.get(
        `https://5efe0296dd373900160b3c01.mockapi.io/restaurantes/${query.id}`
    );

    return { restaurante: response.data }
}

export default Restaurante;