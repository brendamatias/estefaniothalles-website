import * as React from 'react';
import { MdAddAPhoto } from 'react-icons/md';
import { BsLightningFill } from 'react-icons/bs';
import aboutSrc from '../../assets/images/about-image.png';

import { Container, Cards, Content } from './styles';

export default function About() {
  const cards = [
    {
      title: 'Residencial',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting.',
    },
    {
      title: 'Comercial',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting.',
    },
    {
      title: 'Sei lá',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting.',
    },
  ];

  return (
    <Container>
      <div className="container">
        <Cards>
          {cards.map(({ title, text }) => (
            <div key={title}>
              <div className="card-icon">
                <MdAddAPhoto />
              </div>
              <strong>{title}</strong>
              <p>{text}</p>

              <button type="button">Saber mais</button>
            </div>
          ))}
        </Cards>

        <div className="about-header">
          <h3>Lorem ipsum is simply dummy text of</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting.
            Lorem Ipsum is simply dummy text of the printing and typesetting.
            Lorem Ipsum is simply dummy text of the printing and typesetting.
          </p>
        </div>

        <Content>
          <img src={aboutSrc} alt="Sobre" />

          <div>
            <strong className="title-section">
              <BsLightningFill />
              Sobre
            </strong>
            <h1>Lorem Ipsum Is Lorem Ipsum</h1>
            <span>Lorem ipsum is simply</span>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              Ipsum is simply dummy text of the printing and typesetting.
            </p>

            <a href="#services" className="button">
              Nossos serviços
            </a>
          </div>
        </Content>
      </div>
    </Container>
  );
}
