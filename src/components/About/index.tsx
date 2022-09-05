import * as React from 'react';
import { BsLightningFill } from 'react-icons/bs';
import { FaBuilding, FaHome, FaShoppingCart } from 'react-icons/fa';
import { StaticImage } from 'gatsby-plugin-image';
import { Container, Cards, Content } from './styles';

export default function About() {
  const cards = [
    {
      title: 'Residencial',
      text: 'Atendimento residencial que executam desde serviços simples como fiação elétrica, chuveiro elétrico, luminárias, tomadas, além de reestruturar o cabeamento elétrico de sua Residência.',
      icon: <FaHome />,
    },
    {
      title: 'Comercial',
      text: 'Trocas e/ou reparos de tomadas, interruptores e luminarias além de realizar todo tipo de instalações eletricas para a área interna e externa.',
      icon: <FaShoppingCart />,
    },
    {
      title: 'Predial',
      text: 'Elaboramos e executamos projetos eletricos de baixa tensão seguindo todas as normas regulamentadoras',
      icon: <FaBuilding />,
    },
  ];

  return (
    <Container>
      <div className="container">
        <Cards data-aos="fade-up">
          {cards.map(({ title, text, icon }) => (
            <div key={title}>
              <div>
                <div className="card-icon">{icon}</div>
                <strong>{title}</strong>
                <p>{text}</p>
              </div>

              <button type="button">Saber mais</button>
            </div>
          ))}
        </Cards>

        <div className="about-header" id="about">
          <h3>Atuando a mais de 10 anos como eletricista</h3>
          <p>
            Na hora de realizar uma obra ou manutenção na sua residência ou
            imóvel evite os riscos desnecessários, deixe o trabalho elétrico por
            minha conta
          </p>
        </div>

        <Content data-aos="fade-up">
          <StaticImage src="../../assets/images/about-image.png" alt="Sobre" />

          <div>
            <strong className="title-section">
              <BsLightningFill />
              Sobre
            </strong>
            <h1>Profissional qualificado</h1>

            <p>
              Eletricista desde 2012, Estêfanio Thalles tem formação em Elétrica
              Predial, NR10, Instalação de CFTV, Instalação de Central de
              Incêndio, Instalação de Sistemas de Segurança.
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
