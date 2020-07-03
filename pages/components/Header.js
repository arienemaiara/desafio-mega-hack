import React from 'react';

const Header = ({ title, subtitle }) => (
    <header>
        <h1>{title || 'Olá!'}</h1>
        <h2>{subtitle || 'Que bom que você está aqui.'}</h2>
    </header>
)

export default Header;