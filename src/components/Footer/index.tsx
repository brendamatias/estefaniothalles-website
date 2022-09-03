import * as React from 'react';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import logo from '../../assets/images/logo.svg';
import { Container, FooterInfo } from './styles';

export default function Footer() {
  const links = [
    {
      id: 'about',
      label: 'Sobre',
    },
    {
      id: 'services',
      label: 'Serviços',
    },
    {
      id: 'feedbacks',
      label: 'Feedbacks',
    },
  ];

  return (
    <Container>
      <div className="container">
        <FooterInfo>
          <div className="content">
            <img src={logo} alt="Estefânio Thalles Logo" />

            <div>
              <div>
                <span>Menu</span>

                <ul>
                  {links.map(({ id, label }) => (
                    <li key={id} className="header-links">
                      <a href={`#${id}`}>{label}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <span>Contato</span>

                <ul>
                  <li>estefaniothalles@gmail.com</li>
                  <li>+55 31 99350-0702</li>
                </ul>
              </div>

              <div className="footer-icons">
                <div>
                  <a
                    href="https://www.linkedin.com/in/estefanio-thalles-a72241215/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.instagram.com/estefaniothalles/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </FooterInfo>
        <hr />

        <div className="footer-laikacode">
          <span>
            Copyright © 2022{' '}
            <a href="http://laikacode.com.br/" target="_blank" rel="noreferrer">
              LaikaCode
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </Container>
  );
}
