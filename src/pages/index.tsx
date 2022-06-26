import * as React from 'react';
import About from '../components/About';
import Feedbacks from '../components/Feedbacks';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Intro from '../components/Intro';
import Services from '../components/Services';
import GlobalStyle from '../styles/global';

import { ContactInfo } from './styles';

export default function IndexPage() {
  return (
    <main>
      <Header />
      <Intro />
      <About />
      <hr />
      <Services />
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
            <a href="#" className="button light">
              Contate
            </a>
          </div>
        </div>
      </ContactInfo>
      <Feedbacks />
      <Footer />
      <GlobalStyle />
    </main>
  );
}
