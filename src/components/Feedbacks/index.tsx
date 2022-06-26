import * as React from 'react';
import { BsLightningFill } from 'react-icons/bs';
import { MdStar } from 'react-icons/md';

import { Container, Cards } from './styles';

export default function Feedbacks() {
  const feedbacks = [
    {
      name: 'Brenda Matias',
      role: 'Teste',
      text: 'Lorem ipusm is simply dummy text of the printing and typesetting and lorem is ipusm is simply dummy text of the printing and typesetting',
    },
    {
      name: 'Juliana Teste',
      role: 'Teste',
      text: 'Lorem ipusm is simply dummy text of the printing and typesetting and lorem is ipusm is simply dummy text of the printing and typesetting',
    },
    {
      name: 'Juliana Teste',
      role: 'Teste',
      text: 'Lorem ipusm is simply dummy text of the printing and typesetting and lorem is ipusm is simply dummy text of the printing and typesetting',
    },
    {
      name: 'Juliana Teste',
      role: 'Teste',
      text: 'Lorem ipusm is simply dummy text of the printing and typesetting and lorem is ipusm is simply dummy text of the printing and typesetting',
    },
  ];

  return (
    <Container id="feedbacks">
      <div className="container">
        <div className="feedbacks-header">
          <div>
            <strong className="title-section">
              <BsLightningFill />
              Feedbacks
            </strong>
          </div>

          <div>
            <h1>Feedback dos clientes</h1>
          </div>
        </div>
      </div>

      <Cards>
        <div className="background" />
        <ul className="container">
          {feedbacks.map(({ name, role, text }) => (
            <li>
              <div>
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStar />
              </div>
              <p>{text}</p>

              <div className="user-info">
                <div className="image" />
                <div>
                  <strong>{name}</strong>
                  <span>{role}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Cards>
    </Container>
  );
}
