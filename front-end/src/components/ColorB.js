import React from 'react';

const { buscaPessoa } = require('./busca-pessoa')

function ColorB(){
  return (
      buscaPessoa(1, 'blue')
  );
}

export default ColorB;
