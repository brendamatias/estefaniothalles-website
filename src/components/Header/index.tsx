import * as React from 'react';
import logo from '../../assets/images/logo-white.svg';
import { Nav } from './styles';

export default function Header() {
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
      id: 'feedback',
      label: 'Feedbacks',
    },
  ];

  return (
    <Nav>
      <div className="container">
        <img src={logo} alt="Estefânio Thalles Logo" />
        <ul>
          {links.map(({ id, label }) => (
            <li key={id} className="header-links">
              <a href={`#${id}`}>{label}</a>
            </li>
          ))}

          <li>
            <a
              href="https://api.whatsapp.com/send?phone=5531993500702&text=Olá,%20vim%20através%20do%20seu%20site"
              target="_blank"
              className="button light"
              rel="noreferrer"
            >
              Contato
            </a>
          </li>
        </ul>
      </div>
    </Nav>
  );
}
