import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    background: #eee;
    border: 1px solid #ddd;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    padding: 10px;
    margin-right: 20px;
    border-radius: 15px;

    img {
        margin: 10px auto;
    }
`;

const Mesa = () => {
  return (
      <Container>
            <img src='../img/mesa_verde.svg' />
            <img src='../img/mesa_cinza.svg' />
            <img src='../img/mesa_cinza.svg' />
            <img src='../img/mesa_verde.svg' />
            <img src='../img/mesa_verde.svg' />
      </Container>
  );
}

export default Mesa;