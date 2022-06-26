import * as React from 'react';
import { BsLightningFill } from 'react-icons/bs';

import { Container } from './styles';

export default function Feedbacks() {
  return (
    <Container>
      <div className="container">
        <div className="feedbacks-header">
          <div>
            <strong className="title-section">
              <BsLightningFill />
              Feedbacks
            </strong>

            <h1>Feedback dos clientes</h1>
          </div>
        </div>
      </div>
    </Container>
  );
}
