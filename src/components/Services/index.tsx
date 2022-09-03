import * as React from 'react';
import {
  MdCable,
  MdCheck,
  MdOfflineBolt,
  MdSettingsInputComposite,
} from 'react-icons/md';
import { BsLightningFill } from 'react-icons/bs';
import { SiAdblock } from 'react-icons/si';

import { FaFireExtinguisher, FaVideo } from 'react-icons/fa';
import { Container, Intro, Cards, ContactInfo } from './styles';

export default function Services() {
  const cards = [
    {
      title: 'Sistema de segurança',
      icon: <SiAdblock />,
      text: 'Alarme e controle de acesso',
    },
    {
      title: 'Sistema de combate a incêndio',
      icon: <FaFireExtinguisher />,
      text: 'Projeto e execução',
    },
    {
      title: 'CFTV',
      icon: <FaVideo />,
      text: 'Instalação e reparos',
    },
    {
      title: 'Disjuntores',
      icon: <MdSettingsInputComposite />,
      text: 'Instalação e troca',
    },
    {
      title: 'Fiação Elétrica',
      icon: <MdCable />,
      text: 'Troca e dimensionamento correto',
    },
    {
      title: 'Quadro Elétricos',
      icon: <MdOfflineBolt />,
      text: 'Confecção e reparos',
    },
  ];

  return (
    <Container id="services">
      <div className="container">
        <Intro data-aos="fade-right">
          <div>
            <div className="about-content">
              <strong className="title-section">
                <BsLightningFill />
                Serviços
              </strong>
              <h1>Porque contratar um eletricista?</h1>
              <span>
                Contratar um eletricista qualificado evita dores de cabeça e
                evita problemas que poderiam colocar a vida de pessoas em risco.
              </span>
            </div>

            <div className="services-checkboxs">
              <div>
                <div className="icon">
                  <MdCheck />
                </div>
                <span>Menos dores de cabeça</span>
              </div>
              <div>
                <div className="icon">
                  <MdCheck />
                </div>
                <span>Segurança em primeiro lugar</span>
              </div>
              <div>
                <div className="icon">
                  <MdCheck />
                </div>
                <span>Instalações que seguem normas técnicas</span>
              </div>
            </div>
          </div>

          <div className="services-info-numbers">
            <div>
              <strong>10+</strong>
              <span>Anos de experiência</span>
            </div>
            <div>
              <strong>150+</strong>
              <span>Clientes atendidos com excelência</span>
            </div>
          </div>
        </Intro>

        <Cards>
          {cards.map(({ title, text, icon }) => (
            <div data-aos="fade-up">
              <div className="card-icon">{icon}</div>
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
            <h1>Solicite já o seu orçamento!</h1>
            <span>
              É importante escolher um profissional com boas referencias
              profissionais para garantir a qualidade da mão-de-obra
            </span>
          </div>
          <div>
            <a
              href="https://api.whatsapp.com/send?phone=5531993500702&text=Olá,%20vim%20através%20do%20seu%20site"
              target="_blank"
              className="button light"
              rel="noreferrer"
            >
              Contato
            </a>
          </div>
        </div>
      </ContactInfo>
    </Container>
  );
}
