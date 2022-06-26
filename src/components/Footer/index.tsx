import * as React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
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
            <div>
              <img src={logo} alt="Estefânio Thalles Logo" />
            </div>

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
                <li>estefanio@estefanio</li>
                <li>+ 55 81 99999999</li>
                <li>@estefani</li>
              </ul>
            </div>
          </div>

          <div className="footer-icons">
            <div>
              <FaFacebookF />
            </div>
            <div>
              <FaLinkedinIn />
            </div>
            <div>
              <FaInstagram />
            </div>
          </div>
        </FooterInfo>
        <hr />

        <div className="footer-laikacode">
          <span>Copyright © 2022 LaikaCode. All Rights Reserved.</span>
        </div>
      </div>
    </Container>
  );
}
