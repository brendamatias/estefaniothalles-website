import * as React from 'react';
import { Container } from './styles';

export default function Intro() {
  return (
    <Container>
      <div className="container" data-aos="fade-up">
        <span>Eletricista</span>
        <h1>Procurando um eletricista qualificado?</h1>
        <p>
          Prestando serviços em horários flexiveis para melhor atender ao
          cliente.
        </p>

        <a href="#services" className="button light">
          Nossos serviços
        </a>
      </div>
    </Container>
  );
}
