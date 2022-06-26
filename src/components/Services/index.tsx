import * as React from 'react';
import { MdCheck } from 'react-icons/md';
import { BsLightningFill } from 'react-icons/bs';
import { RiUser5Line } from 'react-icons/ri';

import { Container, Intro, Cards, ContactInfo } from './styles';

export default function Services() {
  const cards = [
    {
      title: 'Residencial',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting.',
    },
    {
      title: 'Residencial 2',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting.',
    },
    {
      title: 'Residencial 3',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting.',
    },
    {
      title: 'Residencial 4',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting.',
    },
    {
      title: 'Residencial 5',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting.',
    },
    {
      title: 'Residencial 6',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting.',
    },
  ];

  return (
    <Container id="services">
      <div className="container">
        <Intro>
          <div>
            <div className="about-content">
              <strong className="title-section">
                <BsLightningFill />
                Serviços
              </strong>
              <h1>Lorem Ipsum Is Lorem Ipsum</h1>
              <span>
                Service range including technical skills, design, business
                understanding.
              </span>
            </div>

            <div className="services-checkboxs">
              <div>
                <div className="icon">
                  <MdCheck />
                </div>
                <span>Range including technical skills</span>
              </div>
              <div>
                <div className="icon">
                  <MdCheck />
                </div>
                <span>Business understanding</span>
              </div>
              <div>
                <div className="icon">
                  <MdCheck />
                </div>
                <span>Partner on the long run</span>
              </div>
            </div>
          </div>

          <div className="services-info-numbers">
            <div>
              <strong>3+</strong>
              <span>Anos de experiência</span>
            </div>
            <div>
              <strong>73+</strong>
              <span>Clientes atendidos com excelencia</span>
            </div>
          </div>
        </Intro>

        <Cards>
          {cards.map(({ title, text }) => (
            <div>
              <div className="card-icon">
                <RiUser5Line size={50} />
              </div>
              <div>
                <strong>{title}</strong>
                <span>{text}</span>
              </div>
            </div>
          ))}
        </Cards>
      </div>
      <ContactInfo>
        <div className="container">
          <div>
            <h1>
              Lorem ipusm is simply dummy text of the printing and typesetting?
            </h1>
            <span>
              Lorem ipusm is simply dummy text of the printing and typesetting
            </span>
          </div>
          <div>
            <a
              href="https://api.whatsapp.com/send?phone=5531993500702&text=Olá,%20vim%20através%20do%20seu%20site"
              target="_blank"
              className="button light"
              rel="noreferrer"
            >
              Contate
            </a>
          </div>
        </div>
      </ContactInfo>
    </Container>
  );
}
