import * as React from 'react';
import { Container } from './styles';

export default function Intro() {
  return (
    <Container>
      <div className="container">
        <span>Eletrecista</span>
        <h1>Lorem ipsum is simply dummy text of.</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting.
          understanding.
        </p>

        <a href="#services" className="button">
          Nossos serviços
        </a>
      </div>
    </Container>
  );
}
